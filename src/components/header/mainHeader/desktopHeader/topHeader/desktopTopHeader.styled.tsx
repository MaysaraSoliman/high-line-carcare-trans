"use client";
import styled from "styled-components";

export const StyledDesktopTopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  height: 48px;
  background-color: var(--color-primary);
  padding: 0 50px;
  .left-col {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 15px;
    h5 {
      margin-bottom: 0 !important;
    }
  }
  .right-col {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .top-header-icon {
    color: var(--color-icons-primary);
  }
  .location-icon {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    .right-col {
      a {
        display: none;
      }
    }
  }
`;
