import prisma from "@/utils/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
	req: NextRequest,
	{
		params,
	}: {
		params: { cardNumber: string };
	}
) {
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

		const cardNumber = params.cardNumber; // Dynamic card number from the route

		//check whether card exists or not
		const is_card_exist = await prisma.card.findUnique({
			where: { card_number: Number(cardNumber) },
		});

		if (!is_card_exist?.card_number) {
			console.log("Card Does Not exists");
			return NextResponse.json({
				success: false,
				message: "Card Does not exists",
			});
		}

		await prisma.card.delete({
			where: { card_number: Number(cardNumber) },
		});
		console.log("card deleted successfully");

		return NextResponse.json({
			success: true,
			message: "Card deleted successfully",
		});
	} catch (err: any) {
		console.log(err.message);
		return NextResponse.json({ success: false, message: err.message });
	}
}
