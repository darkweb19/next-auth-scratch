import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,NextUIProvider } from "@nextui-org/react";
import {Button} from '@nextui-org/button'; 

export default function AppNavbar() {
  return (
    <Navbar className="bg-gray-800 text-white p-4">
      <NavbarBrand>
        <p className="text-2xl font-bold">Your Logo</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem style={{ marginRight: '1rem' }}>
          <Link href="/login">
            <Button className="hover:text-gray-300" color="primary" >
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="/signup">
            <Button 
            className="hover:text-gray-300" color="primary" >
              Signup
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
