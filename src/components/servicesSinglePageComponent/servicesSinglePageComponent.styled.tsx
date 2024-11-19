"use client";

import styled from "styled-components";

export const StyledServicesSinglePageComponent = styled.section`
  padding-bottom: 60px;
  padding-top: 60px;
  background: url("/assets/images/work-shop/estimate-bg_img.png");
  background-color: #000;
  .ant-row {
    justify-content: center;
    .ant-col {
      margin-bottom: 25px;
      .box {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        .icon {
          margin-bottom: 10px;
          font-size: 30px;
        }
      }
    }
  }
`;
