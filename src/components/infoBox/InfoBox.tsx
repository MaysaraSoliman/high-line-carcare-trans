import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import "./infoBox.css";
import { Link } from "@/i18n/routing";

interface InfoBoxProps {
  firstTitle: string;
  secondTitle: string;
  thirdTitle?: string;
  fourthTitle?: string;
  paragraph?: string;
  list?: string[];
  button?: string;
  linkPage?: string;
}

const InfoBox = (props: InfoBoxProps) => {
  return (
    <div className="info-container">
      <Title level={5}>{props.firstTitle}</Title>
      <Title level={2}>{props.secondTitle}</Title>
      {props.thirdTitle && <Title level={2}>{props.thirdTitle}</Title>}
      {props.fourthTitle && <Title level={2}>{props.fourthTitle}</Title>}
      {props.paragraph && (
        <Paragraph className="paragraph">{props.paragraph}</Paragraph>
      )}
      {props.list && props.list.length > 0 && (
        <ul>
          {props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {props.button && props.linkPage ? (
        <Link href={props.linkPage}>
          <Button type="primary" className="small-btn">
            {props.button}
          </Button>
        </Link>
      ) : (
        props.button && (
          <Button type="primary" className="small-btn">
            {props.button}
          </Button>
        )
      )}
    </div>
  );
};

export default InfoBox;

// import { Button } from "antd";
// import Paragraph from "antd/es/typography/Paragraph";
// import Title from "antd/es/typography/Title";
// import "./infoBox.css";
// import { Link } from "@/i18n/routing";

// interface infoBoxProps {
//   firstTitle: string;
//   secondTitle: string;
//   thirdTitle?: string;
//   fourthTitle?: string;
//   paragraph: string;
//   button?: string;
//   linkPage?: string;
// }

// const InfoBox = (props: infoBoxProps) => {
//   return (
//     <div className="info-container">
//       <Title level={5}>{props.firstTitle}</Title>
//       <Title level={2}>{props.secondTitle}</Title>
//       {props.thirdTitle ? <Title level={2}>{props.thirdTitle}</Title> : ""}
//       {props.fourthTitle ? <Title level={2}>{props.fourthTitle}</Title> : ""}
//       <Paragraph className="paragraph">{props.paragraph}</Paragraph>
//       {props.button && (
//         <Button type="primary" className="small-btn">
//           {props.linkPage ? (
//             <Link href={props.linkPage}>{props.button}</Link>
//           ) : (
//             props.button
//           )}
//         </Button>
//       )}
//     </div>
//   );
// };

// export default InfoBox;
