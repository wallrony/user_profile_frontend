import React from 'react';
import { Layout } from 'antd';

const BasePage: React.FC = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default BasePage;
