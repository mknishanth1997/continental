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
    <Navbar
      fluid
      rounded
      className="sticky top-0 z-50 !bg-slate-900/95 text-white backdrop-blur border-b border-white/10"
    >
      <NavbarBrand as={Link} href="/">
        <img
          src="/continental-logo.webp"
          alt="CEE Logo"
          className="mr-3 h-10 sm:h-12 w-auto"
          width="200"
          height="56"
          loading="eager"
        />

        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Continental Energy Enterprises
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink as={Link} href="#home" active>
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
