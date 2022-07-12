import React from 'react';
import Header from '../header/Header';
import { WrapperLayout } from './style/WrapperLayout';

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />
      {children}
    </WrapperLayout>
  );
}

export default Layout;