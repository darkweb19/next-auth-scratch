import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { TokenPayload } from "@/utils/interfaces";
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

		//grab the userid from the decoded token
		const userid = decode.id;

		const bankingDetails = await prisma.bankDetails.findMany({
			where: { user_id: userid },
		});

		console.log(bankingDetails);

		//! since card number is BigInt , while fetching it shows error : So we convert it to string
		const serializedBankDetails = bankingDetails.map((bank) => ({
			...bank,
			acc_number: bank.acc_number.toString(), // Convert BigInt to string
			open_date: `${(bank.open_date.getMonth() + 1) // Convert from isoString to normal format as it comes from frontend
				.toString()
				.padStart(2, "0")}/${bank.open_date
				.getDate() // Include the day component
				.toString()
				.padStart(2, "0")}/${bank.open_date.getFullYear()}`, // Include the full year
		}));

		return NextResponse.json({
			success: true,
			bankDetails: serializedBankDetails,
		});
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json({ success: false, message: error.message });
	}
}

export async function POST(req: NextRequest) {
	try {
		const { bankName, bankBranch, accNumber, accType, bankBalance } =
			await req.json();
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

		//grab the userid from the decoded token
		const userid = decode.id;

		//check wheather if the account with the number already exists
		const bank_acc_with_number = await prisma.bankDetails.findUnique({
			where: { acc_number: accNumber },
		});

		if (bank_acc_with_number) {
			console.log(`Account with the number ${accNumber} already exists.`);
			return NextResponse.json({
				success: false,
				message: "Account with that number already exists.",
			});
		}

		//!Add to the database if not exists
		const bankDetails = await prisma.bankDetails.create({
			data: {
				bank_name: "NIMB",
				// bank_branch: "Itahari",
				acc_number: accNumber,
				acc_type: "savings",
				bank_balance: 12321,
				user: {
					connect: {
						id: userid,
					},
				},
			},
		});

		console.log("Bank Details added", bankDetails);

		return NextResponse.json({
			success: true,
			message: "Bank Details Added",
		});
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json({ success: false, message: error.message });
	}
}
