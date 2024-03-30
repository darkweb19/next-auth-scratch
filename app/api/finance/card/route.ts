import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/utils/Prisma";
import { CardRequest, CardResponse, TokenPayload } from "@/utils/interfaces";

export async function GET(req: NextRequest) {
	try {
		//get token from cookie if user is logged in
		const token = req.cookies.get("token")?.value || "";

		//! check if user is logged in or not
		if (!token) {
			console.log("User must be loggedin");
			return NextResponse.json({
				success: false,
				message: "User musted be logged in first",
			});
		}

		//decode and find the id from token payload
		const decode = jwt.verify(
			token,
			process.env.TOKEN_KEY!
		) as TokenPayload;

		//search user in db using userid
		const userid = decode.id;
		const card = await prisma.card.findMany({
			where: { authorId: userid },
		});
		console.log(card);

		//! since card number is BigInt , while fetching it shows error : So we convert it to string
		const serializedCards = card.map((card) => ({
			...card,
			card_number: card.card_number.toString(), // Convert BigInt to string
			expiryDate: `${(card.expiryDate.getMonth() + 1) //convert from isoString to normal format as it comes from frontend
				.toString()
				.padStart(2, "0")}/${card.expiryDate
				.getFullYear()
				.toString()
				.slice(-2)}`,
		}));

		const serializedCardsArray = Object.values(serializedCards);

		//returns the cards
		return NextResponse.json<CardResponse>({
			success: true,
			cards: serializedCardsArray,
		});
	} catch (err: any) {
		return NextResponse.json({
			success: false,
			message: err.message,
		});
	}
}

export async function POST(req: NextRequest) {
	try {
		const token = req.cookies.get("token")?.value || "";

		//!Check if user is logged in or not
		if (!token) {
			console.log("user must be logged in first");
			return NextResponse.json({
				success: false,
				message: "User must be logged in first.",
			});
		}

		//decode and find the id from token payload
		const decode = jwt.verify(
			token,
			process.env.TOKEN_KEY!
		) as TokenPayload;

		//search user in db using userid
		const userid = decode.id;

		const {
			cardName,
			bankName,
			cardNumber,
			cardType,
			expiryDate, //! "09/26" is date format => from frontend
		}: CardRequest = await req.json();

		const is_card_exist = await prisma.card.findFirst({
			where: { card_number: cardNumber },
		});

		if (is_card_exist?.card_number) {
			console.log("Card already exists", is_card_exist.card_number);
			return NextResponse.json({
				success: false,
				message: "Card already exists",
			});
		}

		//this is for converting date into ISO Standard date since prisma supports this...
		const [month, year] = "08/28".split("/").map(Number);
		const date = new Date(Number("20" + year), month - 1);
		const isoStringDate = date.toISOString();

		//!adding card into the database
		const card = await prisma.card.create({
			data: {
				card_name: "Sujan Shrestha",
				bank_name: "NIMB",
				card_number: cardNumber, //! hard coded everything for testing purpose
				card_type: "Debit",
				expiryDate: isoStringDate,
				user: {
					connect: { id: userid },
				},
			},
		});

		console.log("Card created id :", card.id);
		return NextResponse.json<CardResponse>({
			success: true,
			message: "Card added successfully",
		});
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json<CardResponse>({
			success: false,
			message: error.message,
		});
	}
}
