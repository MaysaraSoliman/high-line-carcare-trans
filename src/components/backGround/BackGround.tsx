import Title from "antd/es/typography/Title";
import { StyledBackGroundSection } from "./BackGround.styled";
import { useTranslations } from "next-intl";

const BackGround = ({
  imageUrl,
  mainTitle,
  subTitle,
  transPageKey,
}: {
  imageUrl: string;
  mainTitle?: string;
  subTitle?: string;
  transPageKey?: string;
}) => {
  const t = useTranslations("");
  return (
    <StyledBackGroundSection
      className="componentsSpaces"
      $backgroundImage={imageUrl}
    >
      <div className="overlay-black-50 "></div>
      <div className="info-box">
        <Title level={1}>{t(`${transPageKey}.backGroundMainTitle`)}</Title>
        <Title level={3}>{t(`${transPageKey}.backGroundSubTitle`)}</Title>
      </div>
    </StyledBackGroundSection>
  );
};

export default BackGround;
