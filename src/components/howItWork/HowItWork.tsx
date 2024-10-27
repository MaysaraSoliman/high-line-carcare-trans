import Title from "antd/es/typography/Title";
import "./howItWork.css";
import Paragraph from "antd/es/typography/Paragraph";
import { GiProgression } from "react-icons/gi";
import { Button, Col, Row } from "antd";

const HowItWork = () => {
  return (
    <section className="componentsSpaces" id="howItWorks">
      <div className="overlay-bg"></div>
      <div className="container">
        <div className="container-how-it-works">
          <div className="header animationAppearFromTop">
            <Title level={5}>How it work</Title>
            <Title level={2}>Goodbye dents and scratches!</Title>
            <Paragraph className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Paragraph>
          </div>
          <Row gutter={18} className="steps">
            <Col className="animationAppearFromTop" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>Step 1</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>Free Consultations</Title>
                <Paragraph>
                  Viverra eros natoque sodales ut quisque ullamcorper odio
                  ornare fusce
                </Paragraph>
                <Button className="small-btn" type="primary">
                  CHAT NOW
                </Button>
              </div>
            </Col>
            <Col className="animationAppearFromBottom" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>Step 2</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>Choose Package</Title>
                <Paragraph>
                  Viverra eros natoque sodales ut quisque ullamcorper odio
                  ornare fusce
                </Paragraph>
                <Button className="small-btn" type="primary">
                  Choose Package
                </Button>
              </div>
            </Col>
            <Col className="animationAppearFromTop" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>Step 3</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>Repair Your Car</Title>
                <Paragraph>
                  Viverra eros natoque sodales ut quisque ullamcorper odio
                  ornare fusce
                </Paragraph>
                <Button className="small-btn" type="primary">
                  TRACK NOW
                </Button>
              </div>
            </Col>
            <Col className="animationAppearFromBottom" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>Step 4</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>Finishing</Title>
                <Paragraph>
                  Viverra eros natoque sodales ut quisque ullamcorper odio
                  ornare fusce
                </Paragraph>
                <Button className="small-btn" type="primary">
                  TESTIMONIAL
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
