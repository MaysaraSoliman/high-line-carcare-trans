import BackGround from "@/components/backGround/BackGround";
import Counting from "@/components/counting/Counting";
import VisionAndMisson from "@/components/visionAndMisson/VisionAndMisson";
import WhoWeAre from "@/components/whoWeAre/WhoWeAre";

const AboutPage = () => {
  return (
    <>
      <BackGround
        imageUrl={
          "/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg"
        }
        mainTitle="About us"
        subTitle="Shine can be found everywhere, but it is most prominently found on cars."
        transPageKey="AboutPage"
      />
      <WhoWeAre />
      <Counting />
      <VisionAndMisson />
    </>
  );
};

export default AboutPage;
