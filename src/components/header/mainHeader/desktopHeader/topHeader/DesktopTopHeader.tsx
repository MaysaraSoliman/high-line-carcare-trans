"use client";
import Title from "antd/es/typography/Title";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { StyledDesktopTopHeader } from "./desktopTopHeader.styled";
import LocalSwitcher from "@/components/localSwitcher/LocalSwitcher";
import { useTranslations } from "next-intl";

const DesktopTopHeader = () => {
  const t = useTranslations();
  return (
    <section>
      <StyledDesktopTopHeader>
        <div className="left-col">
          <IoLocationOutline className="top-header-icon location-icon" />
          <a href="#">
            <Title level={5}>{t("ContactUs.location")}</Title>
          </a>
        </div>
        <div className="right-col">
          <a href="#">
            <FaFacebookF className="top-header-icon " />
          </a>
          <a href="#">
            <PiInstagramLogoFill className="top-header-icon" />
          </a>
          <a href="#">
            <FaTwitter className="top-header-icon" />
          </a>
          <a href="#">
            <FaYoutube className="top-header-icon" />
          </a>
          <LocalSwitcher />
        </div>
      </StyledDesktopTopHeader>
    </section>
  );
};

export default DesktopTopHeader;
