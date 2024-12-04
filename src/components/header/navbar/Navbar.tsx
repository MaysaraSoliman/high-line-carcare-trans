"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StyledMenu } from "./navbar.styled";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface NavbarProps {
  mode: string;
  onClose?: () => void;
}

const Navbar = ({ mode, onClose }: NavbarProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  const language = t("language");

  const items = [
    {
      label: <Link href="/">{t("Header.home")}</Link>,
      key: `/${language === "ar" ? "ar" : "en"}`,
    },
    {
      label: <Link href="/services">{t("Header.services")}</Link>,
      key: `/${language === "ar" ? "ar" : "en"}/services`,
    },
    {
      label: <Link href="/about">{t("Header.about")}</Link>,
      key: `/${language === "ar" ? "ar" : "en"}/about`,
    },
    {
      label: <Link href="/contact">{t("Header.contact")}</Link>,
      key: `/${language === "ar" ? "ar" : "en"}/contact`,
    },
  ];

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
