import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const response = NextResponse.json({
			success: true,
			message: "logout success",
		});

		response.cookies.delete("token");
		return response;
	} catch (error: any) {
		return NextResponse.json({ success: false, message: error.message });
	}
}
