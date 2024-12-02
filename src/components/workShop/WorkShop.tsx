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
          <Title level={2}>
            {t("HighlineCenter.HighlineCarCareCenter.mainTitle")}
          </Title>
          <Paragraph className="paragraph">
            {t("HighlineCenter.HighlineCarCareCenter.paragraph")}
          </Paragraph>
          <div className="contacts-box">
            <ContactBox
              className="left-col"
              // title="Free Consultations"
              number={t("ContactBox.firstNumber")}
              numberText={t("ContactBox.firstNumberText")}
            />
            <ContactBox
              className="right-col"
              // title="Book Appointment"
              number={t("ContactBox.secondNumber")}
              numberText={t("ContactBox.secondNumberText")}
            />
          </div>
          <Image
            className="cover-image"
            src={workShopBackGroundImage}
            alt="work shop image"
          />
        </div>
        <div className={`estimate-container`}>
          <Title level={2}>
            {" "}
            {t("HighlineCenter.ReachOurExperts.mainTitle")}
          </Title>
          <Paragraph className="paragraph">
            {t("HighlineCenter.ReachOurExperts.paragraph")}
          </Paragraph>
          <Divider />
          <Button
            href="https://wa.me/966565304127?text=Hi%20there!"
            target="_blank"
            type="primary"
            className="small-btn"
          >
            {t("HighlineCenter.ReachOurExperts.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkShop;
