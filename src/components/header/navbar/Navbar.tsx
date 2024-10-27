"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StyledMenu } from "./navbar.styled";
import { Link } from "@/i18n/routing";

interface NavbarProps {
  mode: string;
  onClose?: () => void;
}

const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "/",
  },
  {
    label: <Link href="/services">Services</Link>,
    key: "/services",
  },
  {
    label: <Link href="/about">About</Link>,
    key: "/about",
  },
  {
    label: <Link href="/contact">Contact</Link>,
    key: "/contact",
  },
];

const Navbar = ({ mode, onClose }: NavbarProps) => {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const styledMenuMode = mode === "horizontal" ? "horizontal" : "vertical";
  return (
    <nav className="nav">
      <StyledMenu
        onClick={onClose}
        selectedKeys={[current]}
        mode={styledMenuMode}
        items={items}
      />
    </nav>
  );
};

export default Navbar;
