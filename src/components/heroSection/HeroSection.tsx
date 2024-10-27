import { StyledCarouselSection } from "./heroSection.styled";
import firstSliderImage from "../../../public/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg";
import secondSliderImage from "../../../public/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg";
import thirdSliderImage from "../../../public/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg";
import fourthSliderImage from "../../../public/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg";
import Slider from "./slider/Slider";

const HeroSection = () => {
  return (
    <StyledCarouselSection effect="fade" autoplay>
      <Slider
        firstTitle="Welcome to shinework"
        secondTitle="Trust the professionals for a"
        thirdTitle="clean and polished finish"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        appointmentBtn="BOOK APPOINTMENT NOW!"
        exploreBtn="EXPLORE MORE"
        image={firstSliderImage}
      />
      <Slider
        firstTitle="Welcome to shinework"
        secondTitle="Trust the professionals for a"
        thirdTitle="clean and polished finish"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        appointmentBtn="BOOK APPOINTMENT NOW!"
        exploreBtn="EXPLORE MORE"
        image={secondSliderImage}
      />
      <Slider
        firstTitle="Welcome to shinework"
        secondTitle="Trust the professionals for a"
        thirdTitle="clean and polished finish"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        appointmentBtn="BOOK APPOINTMENT NOW!"
        exploreBtn="EXPLORE MORE"
        image={thirdSliderImage}
      />
      <Slider
        firstTitle="Welcome to shinework"
        secondTitle="Trust the professionals for a"
        thirdTitle="clean and polished finish"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        appointmentBtn="BOOK APPOINTMENT NOW!"
        exploreBtn="EXPLORE MORE"
        image={fourthSliderImage}
      />
    </StyledCarouselSection>
  );
};

export default HeroSection;
