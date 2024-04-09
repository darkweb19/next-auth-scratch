"use server";
import { cookies } from "next/headers";

//get token for the client from browsers cookies
const getCookies = async () => {
	return new Promise((resolve, reject) => {
		try {
			const getCookies = cookies();
			const token = getCookies.get("token");
			resolve(token?.value);
		} catch (error) {
			reject(error);
		}
	});
};

export default getCookies;
