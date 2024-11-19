import BackGround from "@/components/backGround/BackGround";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import ServicesSinglePageComponent from "@/components/servicesSinglePageComponent/ServicesSinglePageComponent";
import { GiWrench, GiCarBattery } from "react-icons/gi";

const maintenanceServicesData = [
  {
    title: "Tinsmithing.Title",
    description: "RegularMaintenanceForEuropeanCars.Description",
    icon: GiWrench,
  },
  {
    title: "OilChange.Title",
    description: "OilChange.Description",
    icon: GiCarBattery,
  },
  {
    title: "BrakePadsReplacement.Title",
    description: "BrakePadsReplacement.Description",
    icon: GiCarBattery,
  },
  {
    title: "AccidentRepair.Title",
    description: "AccidentRepair.Description",
    icon: GiWrench,
  },
  {
    title: "BodyColdWorkingAdjustment.Title",
    description: "BodyColdWorkingAdjustment.Description",
    icon: GiWrench,
  },
  {
    title: "FaceLiftForEuropeanVehicles.Title",
    description: "FaceLiftForEuropeanVehicles.Description",
    icon: GiWrench,
  },
  {
    title: "RegularMaintenanceForEuropeanCars.Title",
    description: "RegularMaintenanceForEuropeanCars.Description",
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

const MaintenancePage = () => {
  return (
    <div>
      <BackGround
        imageUrl={
          "/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg"
        }
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="ServicesPage"
      />
      <ServicesSinglePageComponent
        services={maintenanceServicesData}
        languageTransKey="ServicesSinglePage.MaintenanceServices"
      />
      <GalleryComponent images={images} />
    </div>
  );
};

export default MaintenancePage;
