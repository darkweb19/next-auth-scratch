"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiSignOutFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";

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
		<div className="flex h-full ">
			{/* Left Sidebar */}
			<div className="w-2/6 sm:w-1/6 h-full border-r flex flex-col justify-between border-gray-200 text-black p-3">
				<div className="p-3">
					<h1 className="text-xl  text-center font-bold mb-4">
						Dashboard
					</h1>

					<ul className="space-y-2">
						<li>
							<Link
								href="/dashboard/admin"
								className="w-full p-2 flex items-center justify-center gap-3 rounded-md hover:bg-slate-100 focus:outline-none  text-center"
							>
								{/* <span className="text-xl">
									<IoPersonSharp />
								</span> */}
								Admin
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/product"
								className="w-full p-2  rounded-md hover:bg-gray-100 focus:outline-none block text-center"
							>
								Product
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/finance"
								className="w-full p-2  rounded-md hover:bg-slate-100 focus:outline-none block text-center"
							>
								Finance
							</Link>
						</li>
					</ul>
				</div>
				<div className=" p-2 mb-20 ">
					<button
						onClick={handleLogout}
						className="w-full p-2 rounded-md flex items-center justify-center gap-3 hover:bg-slate-100 focus:outline-none"
					>
						<span className="text-2xl">
							<PiSignOutFill />
						</span>
						Sign Out
					</button>
				</div>
			</div>

			{/* Middle Content */}
			<main className=" flex-1 overflow-y-scroll scrollbar-hide">
				{children}
			</main>

			{/* Right Sidebar */}
			<div className="hidden border border-l border-gray-200 sm:block w-1/6 p-4">
				<h3 className="text-lg font-semibold mb-2">Page Views</h3>
				<p className="text-gray-600">Total views: 100,000</p>
			</div>
		</div>
	);
}
