import styled from "styled-components";
import { Menu } from "antd";

export const StyledMenu = styled(Menu)`
  border-bottom: 0 !important;
  background-color: var(--color-bg-primary) !important;
  .ant-menu-item {
    padding: 0 !important;
    .ant-menu-title-content {
      display: flex;
      a {
        padding: 0 15px;
        width: 100%;
      }
    }
  }
`;
