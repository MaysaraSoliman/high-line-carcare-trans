import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { StyledWhatsappBtn } from "./WhatsappBtn.styled";

const WhatsappBtn = () => {
  return (
    <StyledWhatsappBtn>
      <a
        href="https://wa.me/966565304127?text=Hi%20there!"
        target="_blank"
        className="whatsappBtn"
      >
        <RiWhatsappFill className="whatsapp-icon" />
      </a>
    </StyledWhatsappBtn>
  );
};

export default WhatsappBtn;
