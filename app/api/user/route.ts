import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { TokenPayload } from "@/app/api/user/login/route";
import prisma from "@/utils/Prisma";

export async function GET(req: NextRequest) {
	//token
	const token = req.cookies.get("token")?.value || "";

	//decode
	const decode = jwt.verify(token, process.env.TOKEN_KEY!) as TokenPayload;

	//find user in database
	const userId = decode.id;
	const userinDb = await prisma.user.findUnique({ where: { id: userId } });

	// return the user
	return NextResponse.json({ success: true, message: "TOken", userinDb });
}
