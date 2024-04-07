"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dashboard } from "./comp/Dashboard";

export default function AdminPage() {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const getUser = async () => {
			const response = await axios.get("/api/user");
			const user: User = response.data.userinDb;
			setUser(user);
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
