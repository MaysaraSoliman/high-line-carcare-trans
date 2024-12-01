import Title from "antd/es/typography/Title";
import "./howItWork.css";
import Paragraph from "antd/es/typography/Paragraph";
import { GiProgression } from "react-icons/gi";
import { Button, Col, Row } from "antd";
import { useTranslations } from "next-intl";

const HowItWork = () => {
  const t = useTranslations("HowItWorks");
  return (
    <section className="componentsSpaces" id="howItWorks">
      <div className="overlay-bg"></div>
      <div className="container">
        <div className="container-how-it-works">
          <div className="header animationAppearFromTop">
            <Title level={5}>{t("subTitle")}</Title>
            <Title level={2}>{t("mainTitle")}</Title>
            {/* <Paragraph className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Paragraph> */}
          </div>
          <Row gutter={18} className="steps">
            <Col className="animationAppearFromTop" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>{t("stepOne")}</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>{t("stepOneCol.title")}</Title>
                <Paragraph>{t("stepOneCol.paragraph")}</Paragraph>
                {/* <Button className="small-btn" type="primary">
                  CHAT NOW
                </Button> */}
              </div>
            </Col>
            <Col className="animationAppearFromBottom" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>{t("stepTwo")}</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>{t("stepTwoCol.title")}</Title>
                <Paragraph>{t("stepTwoCol.paragraph")}</Paragraph>
                {/* <Button className="small-btn" type="primary">
                  Choose Package
                </Button> */}
              </div>
            </Col>
            <Col className="animationAppearFromTop" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>{t("stepThree")}</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>{t("stepThreeCol.title")}</Title>
                <Paragraph>{t("stepThreeCol.paragraph")}</Paragraph>
                {/* <Button className="small-btn" type="primary">
                  TRACK NOW
                </Button> */}
              </div>
            </Col>
            <Col className="animationAppearFromBottom" xs={24} md={12} lg={6}>
              <div className="step-box">
                <div className="step-number">
                  <Title level={5}>{t("stepFour")}</Title>
                </div>
                <GiProgression className="icon" />
                <Title level={3}>{t("stepFourCol.title")}</Title>
                <Paragraph>{t("stepFourCol.paragraph")}</Paragraph>
                {/* <Button className="small-btn" type="primary">
                  TESTIMONIAL
                </Button> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
