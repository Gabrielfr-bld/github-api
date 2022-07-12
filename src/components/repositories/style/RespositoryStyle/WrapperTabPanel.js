import styled from "styled-components";
import { TabPanel } from "react-tabs";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 2.5rem;
  border: 1px solid #162780;
  display: none;
  margint-top: -0.5rem;
  background-color: #162780;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";
