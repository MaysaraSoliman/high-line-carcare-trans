import BackGround from "@/components/backGround/BackGround";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import ServicesSinglePageComponent from "@/components/servicesSinglePageComponent/ServicesSinglePageComponent";
import React from "react";
import { GiSpray, GiShield } from "react-icons/gi";

const servicesData = [
  {
    title: "InternalPolishing.Title",
    description: "InternalPolishing.Description",
    icon: GiSpray,
  },
  {
    title: "ExternalPolishing.Title",
    description: "ExternalPolishing.Description",
    icon: GiShield,
  },
  {
    title: "WaterBasedPolishing.Title",
    description: "WaterBasedPolishing.Description",
    icon: GiSpray,
  },
];

const images = [
  "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
  "/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg",
  "/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg",
  "/assets/images/hero-section/car-detailing-plastic-care-.jpg",
  "/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg",
  "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
  "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
  "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
];

const PolishingPage = () => {
  return (
    <>
      <BackGround
        imageUrl={
          "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg"
        }
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="ServicesPage"
      />
      <ServicesSinglePageComponent
        services={servicesData}
        languageTransKey={"ServicesSinglePage.PolishingServices"}
      />
      <GalleryComponent images={images} />
    </>
  );
};

export default PolishingPage;
