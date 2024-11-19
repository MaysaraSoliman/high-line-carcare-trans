import BackGround from "@/components/backGround/BackGround";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import ServicesSinglePageComponent from "@/components/servicesSinglePageComponent/ServicesSinglePageComponent";
import { GiSpray, GiWrench } from "react-icons/gi"; // Example icons

const sprayingServicesData = [
  {
    title: "PaintTreatment.Title",
    description: "PaintTreatment.Description",
    icon: GiSpray,
  },
  {
    title: "RemovableRubberSprayMatte.Title",
    description: "RemovableRubberSprayMatte.Description",
    icon: GiWrench,
  },
  {
    title: "SprayMatte.Title",
    description: "SprayMatte.Description",
    icon: GiSpray,
  },
  {
    title: "SprayingRims.Title",
    description: "SprayingRims.Description",
    icon: GiWrench,
  },
  {
    title: "SprayingClippers.Title",
    description: "SprayingClippers.Description",
    icon: GiSpray,
  },
  {
    title: "BlackAdditionTreatment.Title",
    description: "BlackAdditionTreatment.Description",
    icon: GiWrench,
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

const SprayingPage = () => {
  return (
    <div>
      <BackGround
        imageUrl={"/assets/images/services/services-bg-1.jpg"}
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="ServicesPage"
      />
      <ServicesSinglePageComponent
        services={sprayingServicesData}
        languageTransKey="ServicesSinglePage.SprayingServices"
      />
      <GalleryComponent images={images} />
    </div>
  );
};

export default SprayingPage;
