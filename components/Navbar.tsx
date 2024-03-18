import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">Your Logo</div>

				<div className="flex space-x-4">
					<Link href="/login" className="hover:text-gray-300">
						Login
					</Link>
					<Link href="/signup" className="hover:text-gray-300">
						Signup
					</Link>
				</div>
			</div>
		</nav>
	);
}
