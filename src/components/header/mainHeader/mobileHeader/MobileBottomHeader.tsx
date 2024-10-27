"use client";
import Image from "next/image";
import logoImage from "/public/assets/images/logo_white (1).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "antd";
import { useState } from "react";
import { StyledMobileBottomHeader } from "./mobileBottomHeader.styled";
import Navbar from "../../navbar/Navbar";
import Link from "next/link";

const MobileBottomHeader = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <section>
      <StyledMobileBottomHeader>
        <div className="left-col">
          <Link href={"/"} className="logo-link">
            <Image src={logoImage} width={150} alt="Picture of the author" />
          </Link>
        </div>
        <div className="right-col">
          <RxHamburgerMenu className="burger-icon" onClick={showDrawer} />
          <Drawer title="Menu" onClose={onClose} open={open}>
            <Navbar mode={"vertical"} onClose={onClose} />
          </Drawer>
        </div>
      </StyledMobileBottomHeader>
    </section>
  );
};

export default MobileBottomHeader;
