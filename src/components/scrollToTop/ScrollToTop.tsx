"use client";
import { UpOutlined } from "@ant-design/icons";
import "./scrollToTop.css";
import { useEffect, useState } from "react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div id="scrollToTop">
      {visible && (
        <div className="scroll_icon" onClick={scrollToTop}>
          <UpOutlined />
        </div>
      )}
    </div>
  );
}
