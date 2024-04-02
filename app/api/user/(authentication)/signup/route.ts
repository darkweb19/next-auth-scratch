import prisma from "@/utils/Prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypjs from "bcryptjs";
import { sendMail } from "@/utils/mailer";
import { SignupFormData } from "@/utils/interfaces";

export async function POST(req: NextRequest) {
	try {
		const { username, email, password }: SignupFormData = await req.json();

		//check if the user already exists
		const user = await prisma.user.findUnique({ where: { email: email } });
		if (user) {
			return NextResponse.json({ error: "User already Exists" });
		}
		//bcrypt for hasing password
		const salt = await bcrypjs.genSalt(10);
		const hashedPassword = await bcrypjs.hash(password, salt);
		const dbUser = await prisma.user.create({
			data: {
				username: username,
				email: email,
				password: hashedPassword,
			},
		});
		console.log(dbUser);

		const { success } = await sendMail({ email });

		if (!success) {
			throw Error("Mail cannot be send. Problem in mailing system");
		}

		return NextResponse.json({
			success: true,
			message: "Created !!! Please Check your mail...",
		});
	} catch (error: any) {
		return NextResponse.json({ success: false, message: error.message });
	}
}
