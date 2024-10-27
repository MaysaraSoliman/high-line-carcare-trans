import Title from "antd/es/typography/Title";
import { StyledBackGroundSection } from "./BackGround.styled";

const BackGround = ({
  imageUrl,
  mainTitle,
  subTitle,
}: {
  imageUrl: string;
  mainTitle: string;
  subTitle: string;
}) => {
  return (
    <StyledBackGroundSection
      className="componentsSpaces"
      $backgroundImage={imageUrl}
    >
      <div className="overlay-black-50 "></div>
      <div className="info-box">
        <Title level={1}>{mainTitle}</Title>
        <Title level={3}>{subTitle}</Title>
      </div>
    </StyledBackGroundSection>
  );
};

export default BackGround;
