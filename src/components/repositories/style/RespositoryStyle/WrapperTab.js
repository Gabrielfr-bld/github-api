import styled from 'styled-components';
import { Tab } from 'react-tabs';

export const WrapperTab = styled(Tab)`
  border-radius: 2.5rem;
  border: 1px solid #blue; 
  padding: 2.5rem;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: #6959CD;
  margin: 1.5rem;
  color: #fafafa;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(72,61,139, 1);
  }
`;

WrapperTab.tabsRole = "Tab";