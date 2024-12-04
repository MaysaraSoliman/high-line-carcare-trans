"use client";
import Image from "next/image";
import logoImage from "/public/assets/images/white-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer, Select } from "antd";
import { useState } from "react";
import { StyledMobileBottomHeader } from "./mobileBottomHeader.styled";
import Navbar from "../../navbar/Navbar";
import Link from "next/link";
import LocalSwitcher from "@/components/localSwitcher/LocalSwitcher";

const MobileBottomHeader = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
            <LocalSwitcher />
            <Select
              defaultValue="lucy"
              style={{ width: 200 }}
              onChange={handleChange}
              options={[
                {
                  label: <span>manager</span>,
                  title: "manager",
                  options: [
                    { label: <span>Jack</span>, value: "Jack" },
                    { label: <span>Lucy</span>, value: "Lucy" },
                  ],
                },
                {
                  label: <span>engineer</span>,
                  title: "engineer",
                  options: [
                    { label: <span>Chloe</span>, value: "Chloe" },
                    { label: <span>Lucas</span>, value: "Lucas" },
                  ],
                },
              ]}
            />
          </Drawer>
        </div>
      </StyledMobileBottomHeader>
    </section>
  );
};

export default MobileBottomHeader;
