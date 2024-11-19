import BackGround from "@/components/backGround/BackGround";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import ServicesSinglePageComponent from "@/components/servicesSinglePageComponent/ServicesSinglePageComponent";
import React from "react";
import { GiSpray, GiShield } from "react-icons/gi";

const servicesData = [
  {
    title: "FullProtection.Title",
    description: "FullProtection.Description",
    icon: GiSpray,
  },
  {
    title: "FrontProtection.Title",
    description: "FrontProtection.Description",
    icon: GiShield,
  },
  {
    title: "QuarterFrontProtection.Title",
    description: "QuarterFrontProtection.Description",
    icon: GiSpray,
  },
  {
    title: "FrontWindshieldProtection.Title",
    description: "FrontWindshieldProtection.Description",
    icon: GiSpray,
  },
  {
    title: "HeadAndTailLightsProtection.Title",
    description: "HeadAndTailLightsProtection.Description",
    icon: GiSpray,
  },
  {
    title: "ThermalInsulationShading.Title",
    description: "ThermalInsulationShading.Description",
    icon: GiSpray,
  },
  {
    title: "NanoCeramicTreatment.Title",
    description: "NanoCeramicTreatment.Description",
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

const ProtectionPage = () => {
  return (
    <>
      <BackGround
        imageUrl={
          "/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg"
        }
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="ServicesPage"
      />
      <ServicesSinglePageComponent
        services={servicesData}
        languageTransKey={"ServicesSinglePage.ProtectionServices"}
      />
      <GalleryComponent images={images} />
    </>
  );
};

export default ProtectionPage;
