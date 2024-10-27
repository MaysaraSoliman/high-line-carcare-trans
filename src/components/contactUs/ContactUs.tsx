import { StyledContactUsSection } from "./ContactUs.styled";
import { Carousel } from "antd";
import ContactUsSlider from "./contactUsSlider/ContactUsSlider";

const ContactUs = () => {
  return (
    <StyledContactUsSection className="componentsSpaces">
      <Carousel className="carousel">
        <ContactUsSlider />
      </Carousel>
    </StyledContactUsSection>
  );
};

export default ContactUs;
