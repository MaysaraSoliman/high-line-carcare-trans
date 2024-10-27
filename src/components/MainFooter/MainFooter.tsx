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

const MainFooter = () => {
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
              title="Free Consultations"
              number="888-6000-613"
            />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="title">
              <Title level={3}>Services</Title>
            </div>
            <ul className="services-list">
              <li>Body Repair</li>
              <li>Car Detailing</li>
              <li>Car Painting</li>
              <li>Engine Repair</li>
              <li>Accessories</li>
            </ul>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="title">
              <Title level={3}>Contact Us</Title>
            </div>
            <ul className="contact-list">
              <li>Jalan Cempaka Wangi No 22</li>
              <li>info@domain.com</li>
              <li>+(123) 698-5245</li>
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
        Copyright © 2024 All Rights Reserved. | Made By Expanda.
      </div>
    </div>
  );
};

export default MainFooter;
