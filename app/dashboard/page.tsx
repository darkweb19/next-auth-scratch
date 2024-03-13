"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function dashboard() {
	const router = useRouter();
	const [user, setUser] = useState<User>();
	console.log(user);

	useEffect(() => {
		const getUser = async () => {
			const response = await axios.get("/api/user");
			const user: User = response.data.userinDb;
			setUser(user);
		};
		getUser();
	}, []);

	const handleLogout = async () => {
		try {
			const response = await axios.get("/api/user/logout");
			if (response.data.success) router.push("/");
		} catch (error: any) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<div className="flex h-screen bg-gray-100">
				{/* Left Sidebar */}
				<div className="w-1/6 bg-gray-800 text-white p-4">
					<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
					<ul className="space-y-2">
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Admin
							</button>
						</li>
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Product
							</button>
						</li>
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Finance
							</button>
						</li>
						<li>
							<button
								onClick={handleLogout}
								className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none"
							>
								Logout
							</button>
						</li>
					</ul>
				</div>

				{/* Middle Content */}
				<div className="w-2/3 p-4 bg-white">
					<h2 className="text-2xl font-semibold mb-4">
						Welcome to the Dashboard
					</h2>
					<p className="text-gray-600">
						This is the middle content area. Hello {user?.username}
					</p>
				</div>

				{/* Right Sidebar */}
				<div className="w-1/6 p-4 bg-gray-200">
					<h3 className="text-lg font-semibold mb-2">Page Views</h3>
					<p className="text-gray-600">Total views: 100,000</p>
				</div>
			</div>
		</div>
	);
}
