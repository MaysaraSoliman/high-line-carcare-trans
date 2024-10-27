import Title from "antd/es/typography/Title";
import { FiPhone } from "react-icons/fi";

interface contactBoxProps {
  className: string;
  title: string;
  number: string;
}

const ContactBox = (props: contactBoxProps) => {
  return (
    <div className={props.className}>
      <FiPhone className="phone-icon" />
      <div className="text-box">
        <Title level={5}>{props.title}</Title>
        <Title level={3}>{props.number}</Title>
      </div>
    </div>
  );
};

export default ContactBox;
