import React from 'react';
import { Layout } from 'antd';

import './styles.css';

interface BasePageProps {
  className?: string;
}

const BasePage: React.FC<BasePageProps> = ({ children, className }) => {
  return (
    <Layout className={`app-page ${className}`}>
      {children}
    </Layout>
  );
}

export default BasePage;
