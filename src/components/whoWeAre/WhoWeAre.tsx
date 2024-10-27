import { Button } from "antd";
import "./whoWeAre.css";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import whoWeAreImage from "../../../public/assets/images/who-we-are/mechanic-checking-car.jpg";
import { useTranslations } from "next-intl";

const WhoWeAre = () => {
  const t = useTranslations("HomePage");
  return (
    <section id="whoWeAre">
      <div className="container who-we-are-container componentsSpaces">
        <div className="left-col animationAppearFromLeft">
          <Title level={5}>{t("howWeAre")}</Title>
          {/* <Title level={5}>Who we are</Title> */}
          <Title level={2}>
            Simple, affordable, and effective car detailing products.
          </Title>
          <Paragraph className="paragraph">
            Ac nulla metus euismod hendrerit aenean vel scelerisque penatibus
            sociosqu. Egestas at si mollis pulvinar nam erat. Vel netus non
            pharetra curabitur gravida vulputate efficitur. Eu duis consectetuer
            turpis adipiscing dis nascetur habitant.
          </Paragraph>
          <Button type="primary" className="small-btn">
            DISCOVER MORE
          </Button>
        </div>
        <div className="right-col animationAppearFromBottom">
          <Image
            className="cover-image"
            src={whoWeAreImage}
            alt="who we are image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
