"use client";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Statistic, StatisticProps } from "antd";
import { useEffect, useState } from "react";
import "./counting.css";
import CountUp from "react-countup";

const Counting = () => {
  const [isInView, setIsInView] = useState(false);
  const formatter: StatisticProps["formatter"] = (value) =>
    isInView ? <CountUp end={value as number} separator="," /> : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.7, // Trigger when 10% of the target is visible
      }
    );

    const target = document.getElementById("counting");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <section className="animationAppearFromBottom" id="counting">
      <div className="container">
        <div className="counting_container">
          <Row gutter={16}>
            <Col xs={12} md={6}>
              <Statistic
                title="Partners"
                value={43}
                formatter={formatter}
                prefix={<PlusOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Clients"
                value={60}
                precision={2}
                formatter={formatter}
                prefix={<PlusOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Team"
                value={30}
                precision={2}
                formatter={formatter}
                prefix={<PlusOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Projects"
                value={1000}
                precision={2}
                formatter={formatter}
                prefix={<PlusOutlined />}
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Counting;
