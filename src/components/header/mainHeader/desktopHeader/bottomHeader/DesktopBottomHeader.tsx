import Image from "next/image";
import Navbar from "../../../navbar/Navbar";
import logoImage from "/public/assets/images/white-logo.png";
import { StyledDesktopBottomHeader } from "./desktopBottomHeader.styled";
import Link from "next/link";
import ContactBox from "@/components/contactBox/ContactBox";
import { useTranslations } from "next-intl";

const DesktopBottomHeader = () => {
  const t = useTranslations();
  return (
    <StyledDesktopBottomHeader>
      <Link className="logo-link" href={"/"}>
        <Image src={logoImage} width={150} alt="Picture of the author" />
      </Link>
      <Navbar mode={"horizontal"} />
      <ContactBox
        className="right-col"
        number={t("ContactBox.firstNumber")}
        numberText={t("ContactBox.firstNumberText")}
      />
    </StyledDesktopBottomHeader>
  );
};

export default DesktopBottomHeader;
