"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { Dashboard } from "./comp/Dashboard";
import { getLoggedInUser } from "@/lib/getUser";

export default function AdminPage() {
	//get user from the server
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const getUser = async () => {
			const logInUser = await getLoggedInUser();
			setUser(logInUser as User);
		};
		getUser();
	}, []);

	return (
		<div className="p-2">
			<div className="mt-3">
				<h2 className="text-xl font-semibold ml-4">
					Welcome back {user?.username},
				</h2>
			</div>
			<Dashboard />
		</div>
	);
}
