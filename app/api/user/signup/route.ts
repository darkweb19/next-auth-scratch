import prisma from "@/utils/Prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypjs from "bcryptjs";
import { sendMail } from "@/utils/mailer";

export async function POST(req: NextRequest) {
	try {
		const { username, email, password } = await req.json();

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

		await sendMail({ email });

		return NextResponse.json({
			success: true,
			message: "User created successfully",
		});
	} catch (error: any) {
		return NextResponse.json({ success: false, message: error.message });
	}
}
