import { useTranslations } from "next-intl";
import Title from "antd/es/typography/Title";
import "./workingHours.css";
import InfoBox from "../infoBox/InfoBox";
import Image from "next/image";
import workingHoursImage from "../../../public/assets/images/working-hours/working-hours-image.jpg";

interface workingHoursProps {
  mainLinkBtn?: boolean;
}

const WorkingHours = (props: workingHoursProps) => {
  const t = useTranslations();

  const List = [
    t("infoBox.List.firstPoint"),
    t("infoBox.List.secondPoint"),
    t("infoBox.List.thirdPoint"),
    t("infoBox.List.fourthPoint"),
    t("infoBox.List.fifthPoint"),
  ];

  return (
    <section id="workingHours">
      <div className="overlayRedBlack"></div>
      <div className="container container-working-hours componentsSpaces">
        <div className="left-col animationAppearFromLeft">
          <div className="image-col">
            <Image
              className="cover-image"
              src={workingHoursImage}
              alt={t("workingHours.title")}
            />
            <div className="overlay-black "></div>
          </div>
          <div className="working-hours-col">
            <div className="title">
              <Title level={3}>{t("workingHours.title")}</Title>
            </div>
            <div className="working-hours-box">
              {[
                "saturday",
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
              ].map((day) => (
                <div key={day} className="day-box">
                  <Title className="day" level={5}>
                    {t(`workingHours.days.${day}`)}
                  </Title>
                  <Title className="hours" level={5}>
                    {day === "friday"
                      ? t("workingHours.hours.close")
                      : t("workingHours.hours.open")}
                  </Title>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-col animationAppearFromBottom">
          <InfoBox
            firstTitle={t("infoBox.firstTitle")}
            secondTitle={t("infoBox.secondTitle")}
            thirdTitle={t("infoBox.thirdTitle")}
            list={List}
            button={props.mainLinkBtn ? t("infoBox.button") : undefined}
            linkPage="/services"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
