"use client";

import styled from "styled-components";

export const StyledWhatsappBtn = styled.div`
  position: fixed;
  bottom: 45px;
  right: 60px;
  z-index: 99999;
  .whatsappBtn {
    width: 48px;
    height: 48px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 35px;
    }
  }

  .whatsappBtn:hover {
    background-color: #05ab42;
    /* background-color: var(--green-color); */
  }

  .whatsappBtn span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: white;
  }
`;
