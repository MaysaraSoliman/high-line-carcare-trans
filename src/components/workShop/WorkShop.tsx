import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import ContactBox from "../contactBox/ContactBox";
import { Button, Divider } from "antd";
import Image from "next/image";
import "./workShop.css";
import workShopBackGroundImage from "../../../public/assets/images/work-shop/workshop-bg-removebg-preview.png";
import { useTranslations } from "next-intl";

const WorkShop = () => {
  const t = useTranslations();
  return (
    <section className="animationAppearFromBottom" id="workShop">
      <div className={`container workShop-container `}>
        <div className={`repair-container`}>
          <Title level={2}>Car repair workshop</Title>
          <Paragraph className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Paragraph>
          <div className="contacts-box">
            <ContactBox
              className="left-col"
              // title="Free Consultations"
              number={t("ContactBox.firstNumber")}
            />
            <ContactBox
              className="right-col"
              // title="Book Appointment"
              number={t("ContactBox.secondNumber")}
            />
          </div>
          <Image
            className="cover-image"
            src={workShopBackGroundImage}
            alt="work shop image"
          />
        </div>
        <div className={`estimate-container`}>
          <Title level={2}>Get an estimate</Title>
          <Paragraph className="paragraph">
            Tell us about you and your vehicle to get a free initial repair
            estimate.
          </Paragraph>
          <Divider />
          <Button type="primary" className="small-btn">
            START YOUR ESTIMATE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkShop;
