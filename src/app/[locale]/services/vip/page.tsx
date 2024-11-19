import BackGround from "@/components/backGround/BackGround";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import ServicesSinglePageComponent from "@/components/servicesSinglePageComponent/ServicesSinglePageComponent";
import { GiCheckMark } from "react-icons/gi";

const vipCarCareServices = [
  {
    title: "CompleteCarWashVIP.Title",
    description: "CompleteCarWashVIP.Description",
    icon: GiCheckMark,
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

const VIPCarCarePage = () => {
  return (
    <>
      <BackGround
        imageUrl={"/assets/images/hero-section/car-detailing-plastic-care-.jpg"}
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="ServicesPage"
      />
      <ServicesSinglePageComponent
        services={vipCarCareServices}
        languageTransKey="ServicesSinglePage.VIPCarCareAndCleaningServices"
      />
      <GalleryComponent images={images} />
    </>
  );
};

export default VIPCarCarePage;
