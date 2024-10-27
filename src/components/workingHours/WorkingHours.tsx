import Title from "antd/es/typography/Title";
import "./workingHours.css";
import InfoBox from "../infoBox/InfoBox";
import Image from "next/image";
import workingHoursImage from "../../../public/assets/images/working-hours/working-hours-image.jpg";
const WorkingHours = () => {
  return (
    <section id="workingHours">
      <div className="overlayRedBlack"></div>
      <div className="container container-working-hours componentsSpaces">
        <div className="left-col animationAppearFromLeft">
          <div className="image-col">
            <Image
              className="cover-image"
              src={workingHoursImage}
              alt="working hours image"
            />
            <div className="overlay-black "></div>
          </div>
          <div className="working-hours-col">
            <div className="title">
              <Title level={3}>Working Hours</Title>
            </div>
            <div className="working-hours-box">
              <div className="day-box">
                <Title className="day" level={5}>
                  Saturday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Sunday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Monday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Tuesday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Wednesday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Thursday
                </Title>
                <Title className="hours" level={5}>
                  10:00 to 17:00
                </Title>
              </div>
              <div className="day-box">
                <Title className="day" level={5}>
                  Friday
                </Title>
                <Title className="hours" level={5}>
                  Close
                </Title>
              </div>
            </div>
          </div>
        </div>
        <div className="right-col animationAppearFromBottom">
          <InfoBox
            firstTitle="Our Services"
            secondTitle="Let our experts take care of"
            thirdTitle="you automatically"
            paragraph="Ante ligula eget pulvinar himenaeos litora ridiculus id. Finibus
          tellus eros neque suscipit donec. Magna phasellus volutpat donec eget
          habitant aenean commodo lorem."
            button="DISCOVER MORE"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
