import { Button } from "antd";
import "./whoWeAre.css";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import whoWeAreImage from "../../../public/assets/images/who-we-are/mechanic-checking-car.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const WhoWeAre = () => {
  const t = useTranslations("WhoWeAre");
  return (
    <section id="whoWeAre">
      <div className="container who-we-are-container componentsSpaces">
        <div className="left-col animationAppearFromLeft">
          <Title level={5}>{t("subTitle")}</Title>
          {/* <Title level={5}>Who we are</Title> */}
          <Title level={2}>
            {t("mainTitle")}
            {/* Simple, affordable, and effective car detailing products. */}
          </Title>
          <Paragraph className="paragraph">{t("firstParagraph")}</Paragraph>
          <Paragraph className="paragraph">{t("secondParagraph")}</Paragraph>
          <Paragraph className="paragraph">{t("thirdParagraph")}</Paragraph>
          <Button type="primary" className="small-btn">
            <Link href="/about">{t("MainLinkBtn")}</Link>
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
