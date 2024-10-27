import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import "./infoBox.css";

interface infoBoxProps {
  firstTitle: string;
  secondTitle: string;
  thirdTitle?: string;
  fourthTitle?: string;
  paragraph: string;
  button?: string;
}

const InfoBox = (props: infoBoxProps) => {
  return (
    <div className="info-container">
      <Title level={5}>{props.firstTitle}</Title>
      <Title level={2}>{props.secondTitle}</Title>
      {props.thirdTitle ? <Title level={2}>{props.thirdTitle}</Title> : ""}
      {props.fourthTitle ? <Title level={2}>{props.fourthTitle}</Title> : ""}
      <Paragraph className="paragraph">{props.paragraph}</Paragraph>
      {props.button ? (
        <Button type="primary" className="small-btn">
          {props.button}
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoBox;
