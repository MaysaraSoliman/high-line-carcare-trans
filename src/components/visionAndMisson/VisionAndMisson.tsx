import Title from "antd/es/typography/Title";
import "./visionAndMission.css";
import Paragraph from "antd/es/typography/Paragraph";
import { IoCarSportSharp } from "react-icons/io5";
import { GiNightVision } from "react-icons/gi";
import InfoBox from "../infoBox/InfoBox";

const VisionAndMisson = () => {
  return (
    <section id="visionAndMission">
      <div className="overlayRedBlack"></div>
      <div className="container vision-mission-container componentsSpaces">
        <div className="left-col animationAppearFromLeft">
          {/* <Title level={5}>Our Value</Title>
          <Title level={2}>Keep your car clean by</Title>
          <Title level={2}>detailing it regularly.</Title>
          <Paragraph className="paragraph">
            Eros interdum vivamus lacinia purus sociosqu potenti montes porta.
            Mollis vulputate lacus lorem conubia interdum metus sagittis
            condimentum fames. Nunc vel auctor turpis est eros iaculis
            suspendisse montes accumsan scelerisque ac.
          </Paragraph> */}
          <InfoBox
            firstTitle="Our Value"
            secondTitle="Keep your car clean by"
            thirdTitle="detailing it regularly."
            paragraph="Eros interdum vivamus lacinia purus sociosqu potenti montes porta.
            Mollis vulputate lacus lorem conubia interdum metus sagittis
            condimentum fames. Nunc vel auctor turpis est eros iaculis
            suspendisse montes accumsan scelerisque ac."
          />
        </div>
        <div className="right-col animationFade">
          <div className="vision-box">
            <GiNightVision className="icon" />
            <div className="text-box">
              <Title level={3}>Our Vision</Title>
              <Paragraph className="paragraph">
                Deliver high-quality car repair services using the latest
                technology and efficient processes.
              </Paragraph>
            </div>
          </div>
          <div className="mission-box">
            <IoCarSportSharp className="icon" />
            <div className="text-box">
              <Title level={3}>Our Mission</Title>
              <Paragraph className="paragraph">
                Deliver high-quality car repair services using the latest
                technology and efficient processes.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMisson;
