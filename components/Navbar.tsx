"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Menu, Wallet, X } from "lucide-react";
import { useUser } from "@/contexts/UserContext"; // Ensure you are importing the context correctly
import Link from "next/link";

export default function AppNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, loading, refreshUser } = useUser();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Use useEffect to handle navbar updates based on user authentication
	useEffect(() => {
		if (user) {
			refreshUser();
			setIsAuthenticated(true); // User is authenticated, hide the signup button
		} else {
			setIsAuthenticated(false); // User is not authenticated, show the signup button
		}
	}, [user]); // Dependency on user so the effect runs whenever the user state changes

	return (
		<Navbar isBlurred isBordered>
			<div className="fixed w-4/5 max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Wallet className="h-8 w-8" />
						<Link href={"/"} className="ml-2 text-xl font-bold">
							FinanceManage
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<a
							href="#features"
							className="text-gray-600 hover:text-black transition-colors"
						>
							Features
						</a>
						<a
							href="#pricing"
							className="text-gray-600 hover:text-black transition-colors"
						>
							Pricing
						</a>
						<a
							href="#testimonials"
							className="text-gray-600 hover:text-black transition-colors"
						>
							Testimonials
						</a>
						{/* Conditionally render the Sign Up button based on authentication state */}
						{!isAuthenticated && (
							<Link href="/signup">
								<Button
									variant="outline"
									className="border-black text-black hover:bg-black hover:text-white"
								>
									Sign Up
								</Button>
							</Link>
						)}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 mt-20">
						<div className="flex flex-col space-y-4">
							<a
								href="#features"
								className="text-gray-600 hover:text-black transition-colors"
							>
								Features
							</a>
							<a
								href="#pricing"
								className="text-gray-600 hover:text-black transition-colors"
							>
								Pricing
							</a>
							<a
								href="#testimonials"
								className="text-gray-600 hover:text-black transition-colors"
							>
								Testimonials
							</a>
							{/* Conditionally render the Sign Up button in the mobile menu */}
							{!isAuthenticated && (
								<Link href="/signup">
									<Button
										variant="outline"
										className="border-black text-black hover:bg-black hover:text-white"
									>
										Sign Up
									</Button>
								</Link>
							)}
						</div>
					</div>
				)}
			</div>
		</Navbar>
	);
}
