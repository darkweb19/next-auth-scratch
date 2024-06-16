"use server";
import { TokenPayload } from "@/utils/interfaces";
import getCookies from "./getCookies";
import jwt from "jsonwebtoken";
import prisma from "@/utils/Prisma";

export async function getLoggedInUser() {
	try {
		const token = await getCookies();

		if (token) {
			const decode = jwt.verify(
				token as string,
				process.env.TOKEN_KEY!
			) as TokenPayload;

			//search user in db using userid
			const userid = decode.id;
			const user = prisma.user.findUnique({ where: { id: userid } });
			return user;
		}
	} catch (err) {
		if (err instanceof jwt.TokenExpiredError) {
			console.log("Token expired");
			return "token exp";
		}
	}
}
