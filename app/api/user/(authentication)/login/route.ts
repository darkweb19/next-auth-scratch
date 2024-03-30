import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "@/utils/Prisma";
import jwt from "jsonwebtoken";
import { LoginFormData, TokenPayload } from "@/utils/interfaces";

export async function POST(req: NextRequest) {
	try {
		const { email, password }: LoginFormData = await req.json();
		//check if the user exists
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {
			return NextResponse.json({
				success: false,
				message: "User doesn't exists",
			});
		}
		const isValidPass = await bcryptjs.compare(password, user.password);

		if (!isValidPass) {
			return NextResponse.json({
				success: false,
				message: "Invalid Password",
			});
		}

		//create the token data
		const tokenData: TokenPayload = {
			id: user.id,
			email: user.email,
			username: user.username,
		};

		//now assign the user with the token
		const token = jwt.sign(tokenData, process.env.TOKEN_KEY!, {
			expiresIn: "1d",
		});

		const response = NextResponse.json({
			success: true,
			message: "logged in successful",
		});
		response.cookies.set("token", token, { httpOnly: true });
		return response;
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json({ success: false, error: error.message });
	}
}
