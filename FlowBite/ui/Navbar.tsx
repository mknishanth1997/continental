"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <Navbar fluid rounded className="bg-blue-900 text-white shadow-md">
      <NavbarBrand as={Link} href="/">
        <img
          src="/continental-logo.webp"
          className="mr-3 h-10 sm:h-12 w-auto"
          alt="CEE Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Continental Energy Enterprises
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#about">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="#solutions">
          Solutions
        </NavbarLink>
        <NavbarLink as={Link} href="#services">
          Services
        </NavbarLink>
        <NavbarLink as={Link} href="#contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
