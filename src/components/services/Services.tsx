import { Button, Col, Row } from "antd";
import "./services.css";
import Image, { StaticImageData } from "next/image";
import protectionServicesImage from "../../../public/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg";
import bodyRepairImage from "../../../public/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg";
import PaintImage from "../../../public/assets/images/services/services-bg-1.jpg";
import MaintainenceImage from "../../../public/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg";
import InspectionServicesImage from "../../../public/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg";
import CleaningServicesImage from "../../../public/assets/images/hero-section/car-detailing-plastic-care-.jpg";
import Title from "antd/es/typography/Title";
import { FaCarCrash } from "react-icons/fa";
import { GiAutoRepair, GiLargePaintBrush, GiSpray } from "react-icons/gi";
import { FcInspection } from "react-icons/fc";
import { RiVipCrownFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface ServicesProps {
  mainLinkBtn?: boolean;
}

const Services = (props: ServicesProps) => {
  const t = useTranslations("Services");

  const renderServiceCard = (
    href: string,
    imageSrc: StaticImageData,
    altText: string,
    IconComponent: React.ElementType,
    title: string,
    listItems: string[]
  ) => (
    <Col xs={24} md={8}>
      <div className="box-container">
        <Link href={href}>
          <div className="image-box">
            <div className="overlay-black"></div>
            <Image className="cover-image" src={imageSrc} alt={altText} />
          </div>
        </Link>
        <div className="text-box">
          <div className="icon-box">
            <div className="overlay-black"></div>
            <IconComponent className="icon" />
          </div>
          <div className="overlayRedBlack"></div>
          <Title level={3}>{title}</Title>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {props.mainLinkBtn && (
            <Link href={href}>
              <Button className="small-btn" type="primary">
                {t("MainLinkBtn")}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Col>
  );

  return (
    <section id="services">
      <div className="container container-services animationAppearFromBottom">
        <Row gutter={18}>
          {renderServiceCard(
            "/services/protection",
            protectionServicesImage,
            "Body repair",
            FaCarCrash,
            t("ProtectionServices"),
            [
              t("ProtectionCol.fullProtection"),
              t("ProtectionCol.frontProtection"),
              t("ProtectionCol.quarterFrontProtection"),
              t("ProtectionCol.frontWindshieldProtection"),
              t("ProtectionCol.headAndTailLightsProtection"),
              t("ProtectionCol.thermalInsulationShading"),
              t("ProtectionCol.nanoCeramicTreatment"),
            ]
          )}
          {renderServiceCard(
            "/services/polishing",
            bodyRepairImage,
            "Car care",
            GiLargePaintBrush,
            t("PolishingServices"),
            [
              t("PolishingCol.internalPolishing"),
              t("PolishingCol.externalPolishing"),
              t("PolishingCol.WaterBasedPolishing"),
            ]
          )}
          {renderServiceCard(
            "/services/spraying",
            PaintImage,
            "Car care",
            GiSpray,
            t("SprayingServices"),
            [
              t("SprayingCol.paintTratment"),
              t("SprayingCol.removableRubberSprayMatte"),
              t("SprayingCol.sprayMatte"),
              t("SprayingCol.sprayingRims"),
              t("SprayingCol.sprayingClippers"),
              t("SprayingCol.blackAdditionTreatment"),
            ]
          )}
          {renderServiceCard(
            "/services/maintenance",
            MaintainenceImage,
            "Body repair",
            GiAutoRepair,
            t("MaintenanceServices"),
            [
              t("MaintenanceCol.tinsmithing"),
              t("MaintenanceCol.oilChange"),
              t("MaintenanceCol.brakePadsReplacement"),
              t("MaintenanceCol.accidentRepair"),
            ]
          )}
          {renderServiceCard(
            "/services/inspection",
            InspectionServicesImage,
            "Car care",
            FcInspection,
            t("InspectionServices"),
            [
              t("InspectionServicesCol.computerTechnicalInspection"),
              t("InspectionServicesCol.maintenancePoints"),
            ]
          )}
          {renderServiceCard(
            "/services/vip",
            CleaningServicesImage,
            "Car care",
            RiVipCrownFill,
            t("VIPCarCareAndCleaningServices"),
            [t("VIPCarCareAndCleaningCol.CompleteCarWash")]
          )}
        </Row>
      </div>
    </section>
  );
};

export default Services;

// import { Button, Col, Row } from "antd";
// import "./services.css";
// import Image from "next/image";
// import protectionServicesImage from "../../../public/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg";
// import bodyRepairImage from "../../../public/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg";
// import PaintImage from "../../../public/assets/images/services/services-bg-1.jpg";
// import MaintainenceImage from "../../../public/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg";
// import InspectionServicesImage from "../../../public/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg";
// import CleaningServicesImage from "../../../public/assets/images/hero-section/car-detailing-plastic-care-.jpg";
// import Title from "antd/es/typography/Title";
// import { FaCarCrash } from "react-icons/fa";
// import { GiAutoRepair, GiLargePaintBrush } from "react-icons/gi";
// import { GiSpray } from "react-icons/gi";
// import { FcInspection } from "react-icons/fc";
// import { RiVipCrownFill } from "react-icons/ri";
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";

// interface servicesProps {
//   mainLinkBtn?: boolean;
// }

// const Services = (props: servicesProps) => {
//   const t = useTranslations("Services");
//   return (
//     <section id="services">
//       <div className="container container-services  animationAppearFromBottom">
//         <Row gutter={18}>
//           <Col xs={24} md={8}>
//             <Link href="/services/protection">
//               <div className="image-box">
//                 <div className="overlay-black"></div>
//                 <Image
//                   className="cover-image"
//                   src={protectionServicesImage}
//                   alt="Body repair"
//                 />
//               </div>
//               <div className="text-box">
//                 <div className="icon-box">
//                   <div className="overlay-black"></div>
//                   <FaCarCrash className="icon" />
//                 </div>
//                 <div className="overlayRedBlack"></div>
//                 <Title level={3}>{t("ProtectionServices")}</Title>
//                 <ul>
//                   <li>{t("ProtectionCol.fullProtection")} </li>
//                   <li>{t("ProtectionCol.frontProtection")} </li>
//                   <li>{t("ProtectionCol.quarterFrontProtection")} </li>
//                   <li>{t("ProtectionCol.frontWindshieldProtection")} </li>
//                   <li>{t("ProtectionCol.headAndTailLightsProtection")} </li>
//                   <li>{t("ProtectionCol.thermalInsulationShading")} </li>
//                   <li>{t("ProtectionCol.nanoCeramicTreatment")} </li>
//                 </ul>
//                 {props.mainLinkBtn && (
//                   <Button className="small-btn" type="primary">
//                     <Link href={"/services/protection"}>
//                       {t("MainLinkBtn")}
//                     </Link>
//                   </Button>
//                 )}
//               </div>
//             </Link>
//           </Col>
//           <Col xs={24} md={8}>
//             <Link href="/services/polishing">
//               <div className="image-box">
//                 <div className="overlay-black"></div>
//                 <Image
//                   className="cover-image"
//                   src={bodyRepairImage}
//                   alt="Car care"
//                 />
//               </div>
//               <div className="text-box">
//                 <div className="icon-box">
//                   <div className="overlay-black"></div>
//                   <GiLargePaintBrush className="icon" />
//                 </div>
//                 <div className="overlayRedBlack"></div>
//                 <Title level={3}>{t("PolishingServices")}</Title>
//                 <ul>
//                   <li>{t("PolishingCol.internalPolishing")} </li>
//                   <li>{t("PolishingCol.externalPolishing")} </li>
//                   <li>{t("PolishingCol.WaterBasedPolishing")} </li>
//                 </ul>
//                 {props.mainLinkBtn && (
//                   <Button className="small-btn" type="primary">
//                     <Link href={"/services/polishing"}>{t("MainLinkBtn")}</Link>
//                   </Button>
//                 )}
//               </div>
//             </Link>
//           </Col>
//           <Col xs={24} md={8}>
//             <Link href="/services/spraying">
//               <div className="image-box">
//                 <div className="overlay-black"></div>
//                 <Image
//                   className="cover-image"
//                   src={PaintImage}
//                   alt="Car care"
//                 />
//               </div>
//               <div className="text-box">
//                 <div className="icon-box">
//                   <div className="overlay-black"></div>
//                   <GiSpray className="icon" />
//                 </div>
//                 <div className="overlayRedBlack"></div>
//                 <Title level={3}>{t("SprayingServices")}</Title>
//                 <ul>
//                   <li>{t("SprayingCol.paintTratment")} </li>
//                   <li>{t("SprayingCol.removableRubberSprayMatte")} </li>
//                   <li>{t("SprayingCol.sprayMatte")} </li>
//                   <li>{t("SprayingCol.sprayingRims")} </li>
//                   <li>{t("SprayingCol.sprayingClippers")} </li>
//                   <li>{t("SprayingCol.blackAdditionTreatment")} </li>
//                 </ul>
//                 {props.mainLinkBtn && (
//                   <Button className="small-btn" type="primary">
//                     <Link href={"/services/spraying"}>{t("MainLinkBtn")}</Link>
//                   </Button>
//                 )}
//               </div>
//             </Link>
//           </Col>
//           <Col xs={24} md={8}>
//             <Link href="/services/maintenance">
//               <div className="image-box">
//                 <div className="overlay-black"></div>
//                 <Image
//                   className="cover-image"
//                   src={MaintainenceImage}
//                   alt="Body repair"
//                 />
//               </div>
//               <div className="text-box">
//                 <div className="icon-box">
//                   <div className="overlay-black"></div>
//                   <GiAutoRepair className="icon" />
//                 </div>
//                 <div className="overlayRedBlack"></div>
//                 <Title level={3}>{t("MaintenanceServices")}</Title>
//                 <Title level={5}>({t("SpecializedIn")})</Title>
//                 <ul>
//                   <li>{t("MaintenanceCol.tinsmithing")} </li>
//                   <li>{t("MaintenanceCol.oilChange")} </li>
//                   <li>{t("MaintenanceCol.brakePadsReplacement")} </li>
//                   <li>{t("MaintenanceCol.accidentRepair")} </li>
//                 </ul>
//                 {props.mainLinkBtn && (
//                   <Button className="small-btn" type="primary">
//                     <Link href={"/services/maintenance"}>
//                       {t("MainLinkBtn")}
//                     </Link>
//                   </Button>
//                 )}
//               </div>
//             </Link>
//           </Col>
//           <Col xs={24} md={8}>
//             <Link href="/services/inspection">
//               <div className="image-box">
//                 <div className="overlay-black"></div>
//                 <Image
//                   className="cover-image"
//                   src={InspectionServicesImage}
//                   alt="Car care"
//                 />
//               </div>
//               <div className="text-box">
//                 <div className="icon-box">
//                   <div className="overlay-black"></div>
//                   <FcInspection className="icon" />
//                 </div>
//                 <div className="overlayRedBlack"></div>
//                 <Title level={3}>{t("InspectionServices")}</Title>
//                 <ul>
//                   <li>
//                     {t("InspectionServicesCol.computerTechnicalInspection")}{" "}
//                   </li>
//                   <li>{t("InspectionServicesCol.maintenancePoints")} </li>
//                 </ul>
//                 {props.mainLinkBtn && (
//                   <Button className="small-btn" type="primary">
//                     <Link href={"/services/inspection"}>
//                       {t("MainLinkBtn")}
//                     </Link>
//                   </Button>
//                 )}
//               </div>
//             </Link>
//           </Col>
//           <Col xs={24} md={8}>
//             <Link href="/services/vip">
//               <div className="image-box">
//                 <div className="overlay-black"></div>
//                 <Image
//                   className="cover-image"
//                   src={CleaningServicesImage}
//                   alt="Car care"
//                 />
//               </div>
//               <div className="text-box">
//                 <div className="icon-box">
//                   <div className="overlay-black"></div>
//                   <RiVipCrownFill className="icon" />
//                 </div>
//                 <div className="overlayRedBlack"></div>
//                 <Title level={3}>{t("VIPCarCareAndCleaningServices")}</Title>
//                 <ul>
//                   <li>{t("VIPCarCareAndCleaningCol.CompleteCarWash")} </li>
//                 </ul>
//                 {props.mainLinkBtn && (
//                   <Button className="small-btn" type="primary">
//                     <Link href={"/services/vip"}>{t("MainLinkBtn")}</Link>
//                   </Button>
//                 )}
//               </div>
//             </Link>
//           </Col>
//         </Row>
//       </div>
//     </section>
//   );
// };

// export default Services;
