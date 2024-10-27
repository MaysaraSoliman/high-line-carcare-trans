import { Button, Col, Row } from "antd";
import "./services.css";
import Image from "next/image";
import bodyRepairImage from "../../../public/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg";
import PaintImage from "../../../public/assets/images/services/services-bg-1.jpg";
import MaintainenceImage from "../../../public/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg";
import Title from "antd/es/typography/Title";
import { FaCarCrash } from "react-icons/fa";
import { GiAutoRepair, GiLargePaintBrush } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <div className="container container-services  animationAppearFromBottom">
        <Row gutter={18}>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image
                className="cover-image"
                src={bodyRepairImage}
                alt="Body repair"
              />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <FaCarCrash className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>Car Care</Title>
              <ul>
                <li>Ppf </li>
                <li>Window tint </li>
                <li>Detailing </li>
                <li>Nano ceramic</li>
              </ul>
              <Button className="small-btn" type="primary">
                EXPLORE
              </Button>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image className="cover-image" src={PaintImage} alt="Car care" />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <GiLargePaintBrush className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>Paint Job</Title>
              <ul>
                <li>Paint dip </li>
                <li>Accident repair </li>
              </ul>
              <Button className="small-btn" type="primary">
                EXPLORE
              </Button>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image
                className="cover-image"
                src={MaintainenceImage}
                alt="Body repair"
              />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <GiAutoRepair className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>Car Maintenance</Title>
              <Title level={5}>(Specialized in European and German Cars)</Title>
              <ul>
                <li>Oil change </li>
                <li>Brake pads </li>
                <li>Maintenance service </li>
              </ul>
              <Button className="small-btn" type="primary">
                EXPLORE
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Services;
