"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
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
		<div className="p-4 ">
			<h2 className="text-2xl font-semibold mb-4">
				Welcome to the Dashboard
			</h2>
			<p className="">
				This is the middle content area. Hello {user?.username}
			</p>
		</div>
	);
}
