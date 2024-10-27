"use client";

import styled from "styled-components";

export const StyledContactUsSection = styled.section`
  /* .contact-us-container {
    .map {
      width: 100%;
      height: 100%;
      #mapFrame {
        width: 100%;
        height: 100%;
        border-radius: 30px;
      }
    }
    .contactus-col {
      display: flex;
      .contactus-info-col {
        flex: 1;
        padding: 20px 30px;
        h2 {
          margin-bottom: 40px;
        }
        .links {
          .list-box {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 35px;
            .icon {
              font-size: 20px;
            }
            .paragraph {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .working-hours-col {
      flex: 1;
      padding: 20px 30px;
      background-color: var(--color-bg-thirdly);
      .title {
        margin-bottom: 20px;
        border-bottom: 0.25px solid var(--color-text-secondary);
      }
      .day-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;

        h5 {
          margin: 0;
        }

        h5:nth-child(2) {
          color: var(--color-text-secondary);
        }
      }
      .day-box:not(:last-child) {
        border-bottom: 0.25px solid var(--color-text-secondary);
      }
    }
  } */

  .ant-carousel {
    .slick-track {
      .slick-slide {
        > div {
          display: flex;
        }
      }
    }
  }
  .slider-buttons {
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 15px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .slick-dots {
    bottom: -10px !important;
  }
`;
