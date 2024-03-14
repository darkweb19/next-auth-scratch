"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const handleLogout = async () => {
		try {
			const response = await axios.get("/api/user/logout");
			if (response.data.success) router.push("/");
		} catch (error: any) {
			console.log(error.message);
		}
	};
	return (
		<div className="flex h-screen bg-gray-100">
			{/* Left Sidebar */}
			<div className="w-1/6 bg-gray-800 text-white p-4">
				<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
				<ul className="space-y-2">
					<li>
						<Link
							href="/dashboard/admin"
							className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none block text-center"
						>
							Admin
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/product"
							className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none block text-center"
						>
							Product
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/finance"
							className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none block text-center"
						>
							Finance
						</Link>
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
			{children}

			{/* Right Sidebar */}
			<div className="w-1/6 p-4 bg-gray-200">
				<h3 className="text-lg font-semibold mb-2">Page Views</h3>
				<p className="text-gray-600">Total views: 100,000</p>
			</div>
		</div>
	);
}
