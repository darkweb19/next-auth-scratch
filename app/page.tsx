import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
	return (
		<div className="h-full flex flex-col justify-between">
			{/* Main Content */}
			<main className="container mx-auto flex-1 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl  font-bold mb-4">
						Welcome to Your Website
					</h1>
					<p className="text-lg  mb-8">
						Explore our amazing features and services.
					</p>
					<Link
						href="/signup"
						className={buttonVariants({ variant: "outline" })}
					>
						Get Started
					</Link>
				</div>
			</main>
		</div>
	);
}
