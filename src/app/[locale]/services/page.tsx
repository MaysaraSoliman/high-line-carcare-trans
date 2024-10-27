import BackGround from "@/components/backGround/BackGround";
import Services from "@/components/services/Services";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import WorkingHours from "@/components/workingHours/WorkingHours";

const ServicesPage = () => {
  return (
    <>
      <BackGround
        imageUrl={
          "/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg"
        }
        mainTitle="Services"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
      />
      <WorkingHours />
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default ServicesPage;
