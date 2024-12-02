import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { IoLocationOutline } from "react-icons/io5";
import { StyledContactUsSlider } from "./ContactUsSlider.styled";
import { TbPhoneCall } from "react-icons/tb";
import { LuMailCheck } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { useTranslations } from "next-intl";

const ContactUsSlider = () => {
  const t = useTranslations();
  return (
    <StyledContactUsSlider className="container contact-us-container">
      <Row gutter={56}>
        <Col className="map-col" xs={24} md={24} lg={14}>
          <div className="map">
            <iframe
              id="mapFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14485.530602219978!2d46.6660411!3d24.8165845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efcd040ef459b%3A0xfc72438b83cec0f1!2zSElHSExJTkUg2YfYp9mKINmE2KfZitmGINin2YTZitin2LPZhdmK2YY!5e0!3m2!1sen!2seg!4v1731253998376!5m2!1sen!2seg"
              loading="lazy"
            ></iframe>
          </div>
        </Col>
        <Col xs={24} md={24} lg={10} className="contactus-col">
          <div className="contactus-info-col">
            <Title level={2}>{t("ContactUs.title")}</Title>
            <ul className="links">
              <li>
                <div className="list-box">
                  <IoLocationOutline className="icon" />
                  <a href="https://maps.app.goo.gl/3ouLJHD3uq49sdTv8">
                    <Paragraph className="paragraph">
                      {t("ContactUs.location")}
                    </Paragraph>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box">
                  <TbPhoneCall className="icon" />
                  <a href={t("ContactBox.firstNumber")} target="_blank">
                    <Paragraph className="paragraph">
                      {t("ContactBox.firstNumberText")}
                    </Paragraph>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box">
                  <TbPhoneCall className="icon" />
                  <a href={t("ContactBox.secondNumber")} target="_blank">
                    <Paragraph className="paragraph">
                      {t("ContactBox.secondNumberText")}
                    </Paragraph>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box">
                  <LuMailCheck className="icon" />
                  <a href="mailto:info@yourcompany.com">
                    <Paragraph className="paragraph">
                      {t("ContactUs.mail")}
                    </Paragraph>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box">
                  <BsClockHistory className="icon" />
                  <Paragraph className="paragraph">
                    {t("ContactUs.time")}
                  </Paragraph>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="working-hours-col">
            <div className="title">
              <Title level={3}>Working Hours</Title>
            </div>
            <div className="working-hours-box">
              <div className="day-box">
                <Title className="day" level={5}>
                  Saturday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Sunday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Monday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Tuesday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Wednesday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Thursday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Friday
                </Title>
                <Title className="hours" level={5}>
                  Close
                </Title>
              </div>
            </div>
          </div> */}
        </Col>
      </Row>
    </StyledContactUsSlider>
  );
};

export default ContactUsSlider;
