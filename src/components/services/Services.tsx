import { Button, Col, Row } from "antd";
import "./services.css";
import Image from "next/image";
import protectionServicesImage from "../../../public/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg";
import bodyRepairImage from "../../../public/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg";
import PaintImage from "../../../public/assets/images/services/services-bg-1.jpg";
import MaintainenceImage from "../../../public/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg";
import InspectionServicesImage from "../../../public/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg";
import CleaningServicesImage from "../../../public/assets/images/hero-section/car-detailing-plastic-care-.jpg";
import Title from "antd/es/typography/Title";
import { FaCarCrash } from "react-icons/fa";
import { GiAutoRepair, GiLargePaintBrush } from "react-icons/gi";
import { GiSpray } from "react-icons/gi";
import { FcInspection } from "react-icons/fc";
import { RiVipCrownFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface servicesProps {
  mainLinkBtn?: boolean;
}

const Services = (props: servicesProps) => {
  const t = useTranslations("Services");
  return (
    <section id="services">
      <div className="container container-services  animationAppearFromBottom">
        <Row gutter={18}>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image
                className="cover-image"
                src={protectionServicesImage}
                alt="Body repair"
              />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <FaCarCrash className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>{t("ProtectionServices")}</Title>
              <ul>
                <li>{t("ProtectionCol.fullProtection")} </li>
                <li>{t("ProtectionCol.frontProtection")} </li>
                <li>{t("ProtectionCol.quarterFrontProtection")} </li>
                <li>{t("ProtectionCol.frontWindshieldProtection")} </li>
                <li>{t("ProtectionCol.headAndTailLightsProtection")} </li>
                <li>{t("ProtectionCol.thermalInsulationShading")} </li>
                <li>{t("ProtectionCol.nanoCeramicTreatment")} </li>
              </ul>
              {props.mainLinkBtn && (
                <Button className="small-btn" type="primary">
                  <Link href={"/services"}>{t("MainLinkBtn")}</Link>
                </Button>
              )}
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image
                className="cover-image"
                src={bodyRepairImage}
                alt="Car care"
              />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <GiLargePaintBrush className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>{t("PolishingServices")}</Title>
              <ul>
                <li>{t("PolishingCol.internalPolishing")} </li>
                <li>{t("PolishingCol.externalPolishing")} </li>
                <li>{t("PolishingCol.WaterBasedPolishing")} </li>
              </ul>
              {props.mainLinkBtn && (
                <Button className="small-btn" type="primary">
                  <Link href={"/services"}>{t("MainLinkBtn")}</Link>
                </Button>
              )}
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
                <GiSpray className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>{t("SprayingServices")}</Title>
              <ul>
                <li>{t("SprayingCol.paintTratment")} </li>
                <li>{t("SprayingCol.removableRubberSprayMatte")} </li>
                <li>{t("SprayingCol.sprayMatte")} </li>
                <li>{t("SprayingCol.sprayingRims")} </li>
                <li>{t("SprayingCol.sprayingClippers")} </li>
                <li>{t("SprayingCol.blackAdditionTreatment")} </li>
              </ul>
              {props.mainLinkBtn && (
                <Button className="small-btn" type="primary">
                  <Link href={"/services"}>{t("MainLinkBtn")}</Link>
                </Button>
              )}
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
              <Title level={3}>{t("MaintenanceServices")}</Title>
              <Title level={5}>({t("SpecializedIn")})</Title>
              <ul>
                <li>{t("MaintenanceCol.tinsmithing")} </li>
                <li>{t("MaintenanceCol.oilChange")} </li>
                <li>{t("MaintenanceCol.brakePadsReplacement")} </li>
                <li>{t("MaintenanceCol.accidentRepair")} </li>
              </ul>
              {props.mainLinkBtn && (
                <Button className="small-btn" type="primary">
                  <Link href={"/services"}>{t("MainLinkBtn")}</Link>
                </Button>
              )}
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image
                className="cover-image"
                src={InspectionServicesImage}
                alt="Car care"
              />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <FcInspection className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>{t("InspectionServices")}</Title>
              <ul>
                <li>
                  {t("InspectionServicesCol.computerTechnicalInspection")}{" "}
                </li>
                <li>{t("InspectionServicesCol.maintenancePoints")} </li>
              </ul>
              {props.mainLinkBtn && (
                <Button className="small-btn" type="primary">
                  <Link href={"/services"}>{t("MainLinkBtn")}</Link>
                </Button>
              )}
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="image-box">
              <div className="overlay-black"></div>
              <Image
                className="cover-image"
                src={CleaningServicesImage}
                alt="Car care"
              />
            </div>
            <div className="text-box">
              <div className="icon-box">
                <div className="overlay-black"></div>
                <RiVipCrownFill className="icon" />
              </div>
              <div className="overlayRedBlack"></div>
              <Title level={3}>{t("VIPCarCareAndCleaningServices")}</Title>
              <ul>
                <li>{t("VIPCarCareAndCleaningCol.CompleteCarWash")} </li>
              </ul>
              {props.mainLinkBtn && (
                <Button className="small-btn" type="primary">
                  <Link href={"/services"}>{t("MainLinkBtn")}</Link>
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Services;
