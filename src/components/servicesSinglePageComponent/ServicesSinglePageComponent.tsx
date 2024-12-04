import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import { StyledServicesSinglePageComponent } from "./servicesSinglePageComponent.styled";
import { useTranslations } from "next-intl";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServicesSinglePageComponentProps {
  services: ServiceItem[];
  languageTransKey?: string;
}

const ServicesSinglePageComponent = ({
  services,
  languageTransKey,
}: ServicesSinglePageComponentProps) => {
  const t = useTranslations(languageTransKey);
  return (
    <StyledServicesSinglePageComponent id="services-single-page">
      <div className="overlay-bg"></div>
      <div className="container services-container">
        <Row gutter={16}>
          {services.map((service, index) => (
            <Col key={index} xs={24} md={8}>
              <div className="box">
                <service.icon className="icon" />{" "}
                <Title level={3} className="title">
                  {t(`${service.title}`)}
                </Title>
                <Paragraph className="paragraph">
                  {t(`${service.description}`)}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </StyledServicesSinglePageComponent>
  );
};

export default ServicesSinglePageComponent;
