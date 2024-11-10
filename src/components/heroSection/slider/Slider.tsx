import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image, { StaticImageData } from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface sliderProps {
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  paragraph?: string;
  appointmentBtn?: string;
  exploreBtn?: string;
  image: StaticImageData;
  firstPoint: string;
  secondPoint: string;
  thirdPoint: string;
}

const Slider = (props: sliderProps) => {
  return (
    <div className="slider-container ">
      <div className="text-box container">
        <Title level={5}>{props.firstTitle}</Title>
        <Title>{props.secondTitle}</Title>
        <Title>{props.thirdTitle}</Title>
        {/* <Paragraph className="paragraph">{props.paragraph}</Paragraph> */}
        <ul className="list-points">
          <li>
            <div className="icon">
              <IoIosCheckmarkCircleOutline />
            </div>
            <Title level={5}>{props.firstPoint} </Title>
          </li>
          <li>
            <div className="icon">
              <IoIosCheckmarkCircleOutline />
            </div>
            <Title level={5}>{props.secondPoint} </Title>
          </li>
          <li>
            <div className="icon">
              <IoIosCheckmarkCircleOutline />
            </div>
            <Title level={5}>{props.thirdPoint} </Title>
          </li>
        </ul>
      </div>
      {/* <div className="slider-buttons">
        <Button className="large-btn" type="primary">
          {props.appointmentBtn}
        </Button>
        <Button className="large-btn" type="primary">
          {props.exploreBtn}
        </Button>
      </div> */}

      <div className="overlay"></div>
      <Image
        className="cover-image"
        src={props.image}
        alt="car-body-plishing"
        priority
      />
    </div>
  );
};

export default Slider;
