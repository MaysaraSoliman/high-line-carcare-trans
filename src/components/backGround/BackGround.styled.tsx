"use client";

import styled from "styled-components";

interface BackgroundProps {
  $backgroundImage: string;
}

export const StyledBackGroundSection = styled.section<BackgroundProps>`
  background: url(${(props) => props.$backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 200px 0;
  .info-box {
    text-align: center;
    margin: 0 15px;
    h1 {
    }
    h3 {
      max-width: 650px;
      margin: auto;
    }
  }

  @media (max-width: 992px) {
    padding: 100px 0;
  }
`;
