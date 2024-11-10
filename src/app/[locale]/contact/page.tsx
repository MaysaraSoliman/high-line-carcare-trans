import BackGround from "@/components/backGround/BackGround";
import Map from "@/components/map/Map";

const ContactPage = () => {
  return (
    <>
      <BackGround
        imageUrl={"/assets/images/hero-section/car-detailing-plastic-care-.jpg"}
        mainTitle="Contact us"
        subTitle="Start the conversation to established good relationship and business."
        transPageKey="ContactPage"
      />
      <Map />
    </>
  );
};

export default ContactPage;
