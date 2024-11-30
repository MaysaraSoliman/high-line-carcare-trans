"use client";
import Title from "antd/es/typography/Title";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { StyledDesktopTopHeader } from "./desktopTopHeader.styled";
import LocalSwitcher from "@/components/localSwitcher/LocalSwitcher";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
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
          <a
            href="https://www.facebook.com/profile.php?id=61568045994116"
            target="_blank"
          >
            <FaFacebookF className="top-header-icon " />
          </a>
          <a href=" https://www.instagram.com/highline_sa/" target="_blank">
            <PiInstagramLogoFill className="top-header-icon" />
          </a>
          <a href="https://x.com/HIGHLINE_SA" target="_blank">
            <FaTwitter className="top-header-icon" />
          </a>
          <a href="https://www.snapchat.com/add/highline_sa" target="_blank">
            <FaSnapchatGhost className="top-header-icon" />
          </a>
          <a href=" https://www.tiktok.com/@highline_sa" target="_blank">
            <FaTiktok className="top-header-icon" />
          </a>
          <LocalSwitcher />
        </div>
      </StyledDesktopTopHeader>
    </section>
  );
};

export default DesktopTopHeader;
