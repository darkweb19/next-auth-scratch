import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function AppNavbar() {
	return (
		<Navbar isBlurred isBordered>
			<NavbarBrand>
				<p className="text-2xl font-bold">Your Logo</p>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link href="/login">
						<Button className="hover:bg-slate-300">Login</Button>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/signup">
						<Button className="hover:bg-slate-300">Signup</Button>
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
