import BackGround from "@/components/backGround/BackGround";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import ServicesSinglePageComponent from "@/components/servicesSinglePageComponent/ServicesSinglePageComponent";
import { GiCheckMark } from "react-icons/gi";

const inspectionServicesData = [
  {
    title: "ComputerTechnicalInspection.Title",
    description: "ComputerTechnicalInspection.Description",
    icon: GiCheckMark,
  },
  {
    title: "InspectionOfComprehensiveMaintenancePoints.Title",
    description: "InspectionOfComprehensiveMaintenancePoints.Description",
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

const InspectionPage = () => {
  return (
    <div>
      <BackGround
        imageUrl={
          "/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg"
        }
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="ServicesPage"
      />
      <ServicesSinglePageComponent
        services={inspectionServicesData}
        languageTransKey="ServicesSinglePage.InspectionServices"
      />
      <GalleryComponent images={images} />
    </div>
  );
};

export default InspectionPage;
