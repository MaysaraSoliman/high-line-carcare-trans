"use client";
import styled from "styled-components";

export const StyledDesktopBottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-link {
    display: flex;
    align-items: center;
  }
  .nav {
    width: 400px;
  }
  .nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .anticon-user,
  .anticon-user-add {
    font-size: 20px;
  }
  .right-col {
    display: flex;
    align-items: center;
    gap: 15px;
    .phone-icon {
      font-size: 38px;
      color: var(--color-text-primary);
      color: var(--color-text-primary) !important;
    }
    h3,
    h5 {
      margin: 0 !important;
      color: var(--color-text-primary) !important;
    }
    h5 {
    }
  }
`;
