import React from 'react';
import { Button } from 'antd';

import './styles.css';

interface PrimaryButtonProps {
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ id, type = 'button', children }) => (
  <Button
    id={id}
    className="app-primary-btn"
    type="primary"
    htmlType={type}
  >
    {children}
  </Button>
)

export default PrimaryButton;
