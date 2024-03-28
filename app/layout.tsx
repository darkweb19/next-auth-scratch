import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Divider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Full-Stack Authentication",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={`${inter.className} text-black flex flex-col h-screen`}
			>
				<Providers>
					<Navbar />

					<main className="flex-1 overflow-y-auto h-screen ">
						{children}
					</main>
					{/* Footer */}
					<footer className=" border-t border-gray-300 text-black text-center py-4">
						<p>&copy; 2024 Your Website. All rights reserved.</p>
					</footer>
				</Providers>
				<Toaster />
			</body>
		</html>
	);
}
