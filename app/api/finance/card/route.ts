import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../../user/(authentication)/login/route";
import prisma from "@/utils/Prisma";

export async function GET(req: NextRequest) {
	try {
		//get token from cookie if user is logged in
		const token = req.cookies.get("token")?.value || "";
		console.log(token);

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

		return NextResponse.json({ success: true, cards: card });
	} catch (err: any) {
		NextResponse.json({ success: false, message: err.message });
	}
}

export async function POST(req: NextRequest) {
	try {
		const token = req.cookies.get("token")?.value || "";
		console.log(token);

		//decode and find the id from token payload
		const decode = jwt.verify(
			token,
			process.env.TOKEN_KEY!
		) as TokenPayload;

		//search user in db using userid
		const userid = decode.id;

		const { cardName, bankName, cardNumber, cardType, expiryDate } =
			await req.json();

		//this is for converting date into ISO Standard date since prisma supports this...
		const [month, year] = "06/29".split("/").map(Number);
		const date = new Date(year, month - 1, 1);
		const isoStringDate = date.toISOString();

		//!adding card into the database
		const card = await prisma.card.create({
			data: {
				card_name: "Sujan Shrestha",
				bank_name: "NIMB",
				card_number: 12243190,
				card_type: "Credit",
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
