import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

export default function AppNavbar() {
  return (
    <Navbar className="bg-gray-800 text-white p-4">
      <NavbarBrand>
        <p className="text-2xl font-bold">Your Logo</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem style={{ marginRight: '1rem' }}>
          <Link href="/login">
            <Button className="hover:text-gray-300" color="primary">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="/signup">
            <Button className="hover:text-gray-300" color="primary" >
              Signup
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
