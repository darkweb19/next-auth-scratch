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
		<section className="flex h-full p-4 bg-[#EAEDF4] dark:bg-black">
			{/* Left Sidebar */}
			<div className="w-2/6 sm:w-1/6 p-4 rounded-lg bg-white dark:bg-black flex flex-col justify-between border border-r-2  dark:border-r-slate-600">
				<div>
					<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
					<ul className="space-y-2 font-medium">
						<li>
							<Link
								href="/dashboard/admin"
								className="w-full p-2  rounded-md dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none block text-center"
							>
								Admin
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/product"
								className="w-full p-2 rounded-md dark:hover:bg-gray-600 hover:bg-slate-200 focus:outline-none block text-center"
							>
								Product
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/finance"
								className="w-full p-2 rounded-md hover:bg-slate-200 dark:hover:bg-gray-600 focus:outline-none block text-center"
							>
								Finance
							</Link>
						</li>
					</ul>
				</div>
				<button
					onClick={handleLogout}
					className="w-full p-2  rounded-md  hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
				>
					Sign Out
				</button>
			</div>

			{/* Middle Content */}
			<main className="flex-1 overflow-y-auto">{children}</main>

			{/* Right Sidebar */}
			<div className="hidden sm:block w-1/6 p-4 border border-l-2  rounded-lg bg-white dark:bg-black dark:border-r-slate-600">
				<h3 className="text-lg font-semibold mb-2">Page Views</h3>
				<p className="">Total views: 100,000</p>
			</div>
		</section>
	);
}
