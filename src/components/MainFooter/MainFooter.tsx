import { Col, Divider, Row } from "antd";
import Image from "next/image";
import React from "react";
import LogoImage from "../../../public/assets/images/logo_white (1).png";
import "./MainFooter.css";
import Paragraph from "antd/es/typography/Paragraph";
import ContactBox from "../contactBox/ContactBox";
import Title from "antd/es/typography/Title";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useTranslations } from "next-intl";

const MainFooter = () => {
  const t = useTranslations();
  return (
    <div id="MainFooter">
      <div className="container main-footer-container">
        <Row gutter={30}>
          <Col xs={24} md={12} lg={12}>
            <div className="image">
              <Image src={LogoImage} alt="Logo" />
            </div>
            <Paragraph className="paragraph">
              {t("HeroSection.secondTitle")} {t("HeroSection.thirdTitle")}
            </Paragraph>
            <ContactBox
              className="left-col"
              // title="Free Consultations"
              number={t("ContactBox.firstNumber")}
            />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="title">
              <Title level={3}>{t("Services.services")}</Title>
            </div>
            <ul className="services-list">
              <li>{t("Services.ProtectionServices")}</li>
              <li>{t("Services.Polishing&SprayingServices")}</li>
              <li>{t("Services.MaintenanceServices")}</li>
              <li>{t("Services.InspectionServices")}</li>
              <li>{t("Services.VIPCarCareAndCleaningServices")}</li>
            </ul>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="title">
              <Title level={3}>{t("ContactUs.contactUs")}</Title>
            </div>
            <ul className="contact-list">
              <li>{t("ContactUs.location")}</li>
              <li>
                <a href="mailto:info@highline-carcare.com" target="_blank">
                  {t("ContactUs.mail")}
                </a>
              </li>
              <li>
                {" "}
                <a href="tel:+966536771111">{t("ContactBox.firstNumber")}</a>
              </li>
            </ul>
            <div className="social-links">
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
              <a
                href="https://www.snapchat.com/add/highline_sa"
                target="_blank"
              >
                <FaSnapchatGhost className="top-header-icon" />
              </a>
              <a href=" https://www.tiktok.com/@highline_sa" target="_blank">
                <FaTiktok className="top-header-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Divider className="divider" />
      <div className="copy-rights">
        {t("Footer.copyRights")}
        {/* Copyright © 2024 All Rights Reserved. | Made By Expanda. */}
      </div>
    </div>
  );
};

export default MainFooter;
