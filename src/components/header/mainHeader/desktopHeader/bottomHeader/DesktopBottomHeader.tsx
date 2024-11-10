import Image from "next/image";
import Navbar from "../../../navbar/Navbar";
import logoImage from "/public/assets/images/logo_white (1).png";
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
        // title={t("freeConsultations")}
        number={t("ContactBox.firstNumber")}
      />
    </StyledDesktopBottomHeader>
  );
};

export default DesktopBottomHeader;
