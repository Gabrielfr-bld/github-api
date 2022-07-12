import styled from 'styled-components';
import { Tab } from 'react-tabs';

export const WrapperTab = styled(Tab)`
  border-radius: 2.5rem;
  border: 1px solid #ccc;
  padding: 2.5rem;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: "#fff";
  margin: 1.5rem;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

WrapperTab.tabsRole = "Tab";