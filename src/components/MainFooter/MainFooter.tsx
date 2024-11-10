import { Col, Divider, Row } from "antd";
import Image from "next/image";
import React from "react";
import LogoImage from "../../../public/assets/images/logo_white (1).png";
import "./MainFooter.css";
import Paragraph from "antd/es/typography/Paragraph";
import ContactBox from "../contactBox/ContactBox";
import Title from "antd/es/typography/Title";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
            </ul>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="title">
              <Title level={3}>{t("ContactUs.contactUs")}</Title>
            </div>
            <ul className="contact-list">
              <li>{t("ContactUs.location")}</li>
              <li>{t("ContactUs.mail")}</li>
              <li>
                {" "}
                <a href="tel:+966536771111">+{t("ContactBox.firstNumber")}</a>
              </li>
            </ul>
            <div className="social-links">
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
