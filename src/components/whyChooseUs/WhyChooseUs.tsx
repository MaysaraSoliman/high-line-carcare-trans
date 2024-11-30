import { Col, Row } from "antd";
import InfoBox from "../infoBox/InfoBox";
import "./whyChooseUs.css";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { GiElectricalCrescent, GiProgression } from "react-icons/gi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { PiChatsDuotone } from "react-icons/pi";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("WhyChooseUs");
  return (
    <section className="componentsSpaces animationFade" id="whyChooseUs">
      <div className="overlay-bg"></div>
      <div className="container  ">
        <div className="why-choose-us-container">
          <div className="left-col">
            <InfoBox
              firstTitle={t("subTitle")}
              secondTitle={t("firstMainTitle")}
              thirdTitle={t("secondMainTitle")}
              fourthTitle={t("thirdMainTitle")}
              button={t("MainLinkBtn")}
              linkPage="/contact"
            />
          </div>
          <div className="right-col">
            <Row gutter={12}>
              <Col xs={24} md={12}>
                <div className="feature-box">
                  <GiProgression className="icon" />
                  <div className="text-box">
                    <Title level={3}>{t("firstBox.title")}</Title>
                    <Paragraph className="paragraph">
                      {t("firstBox.paragraph")}
                    </Paragraph>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="feature-box">
                  <GiElectricalCrescent className="icon" />
                  <div className="text-box">
                    <Title level={3}>{t("secondBox.title")}</Title>
                    <Paragraph className="paragraph">
                      {t("secondBox.paragraph")}
                    </Paragraph>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col xs={24} md={12}>
                <div className="feature-box">
                  <AiOutlineFileProtect className="icon" />
                  <div className="text-box">
                    <Title level={3}>{t("thirdBox.title")}</Title>
                    <Paragraph className="paragraph">
                      {t("thirdBox.paragraph")}
                    </Paragraph>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="feature-box">
                  <PiChatsDuotone className="icon" />
                  <div className="text-box">
                    <Title level={3}>{t("fourthBox.title")}</Title>
                    <Paragraph className="paragraph">
                      {t("fourthBox.paragraph")}
                    </Paragraph>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
