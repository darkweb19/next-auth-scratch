import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col justify-between">
			{/* Main Content */}
			<main className="container mx-auto flex-1 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">
						Welcome to Your Website
					</h1>
					<p className="text-lg mb-8">
						Explore our amazing features and services.
					</p>
					<Link
						href="/signup"
						className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
					>
						Get Started
					</Link>
				</div>
			</main>
		</div>
	);
}
