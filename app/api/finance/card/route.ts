import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../../user/(authentication)/login/route";
import prisma from "@/utils/Prisma";

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

		return NextResponse.json({ success: true, cards: card, token });
	} catch (err: any) {
		return NextResponse.json({ success: false, message: err.message });
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

		const { cardName, bankName, cardNumber, cardType, expiryDate } =
			await req.json();

		const is_card_exist = await prisma.card.findFirst({
			where: { card_number: cardNumber },
		});

		if (is_card_exist?.card_number) {
			console.log("Card already exists");
			return NextResponse.json({
				success: false,
				message: "Card already exists",
			});
		}

		//this is for converting date into ISO Standard date since prisma supports this...
		const [month, year] = "02/25".split("/").map(Number);
		const date = new Date(year, month - 1, 1);
		const isoStringDate = date.toISOString();

		//!adding card into the database
		const card = await prisma.card.create({
			data: {
				card_name: "Sujan Shrestha",
				bank_name: "NIMB",
				card_number: 123213121,
				card_type: "Debit",
				expiryDate: isoStringDate,
				user: {
					connect: { id: userid },
				},
			},
		});

		console.log("Card created id :", card.id);
		return NextResponse.json({
			success: true,
			message: "Card added successfully",
		});
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json({ success: false, message: error.message });
	}
}
