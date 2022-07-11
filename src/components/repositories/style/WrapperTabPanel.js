import styled from "styled-components";
import { TabPanel } from "react-tabs";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 2.5rem;
  border: 1px solid #ccc;
  display: none;
  margint-top: -0.5rem;

  &.is-selected {
    display: block;
  }
`;