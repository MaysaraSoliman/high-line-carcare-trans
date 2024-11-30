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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13820.41444054195!2d31.4744839!3d30.0051812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458231ca5ac1dd1%3A0x705661a73ed23b4f!2sDentolize%20Inc!5e0!3m2!1sen!2seg!4v1727341808691!5m2!1sen!2seg"
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
                  <a href="tel:+966536771111">
                    <Paragraph className="paragraph">
                      +{t("ContactBox.firstNumber")}
                    </Paragraph>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box">
                  <TbPhoneCall className="icon" />
                  <a href="tel:+966565304127">
                    <Paragraph className="paragraph">
                      {t("ContactBox.secondNumber")}
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
