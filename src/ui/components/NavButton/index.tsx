import React from 'react';
import { Button } from 'antd';

import './styles.css';

interface NavButtonProps {
  text: string;
  selected: boolean;
  onClick: (ev: React.MouseEvent) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, selected, onClick }) => {
  return (
    <Button
      className={`nav-item${selected ? ' selected' : ''}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default NavButton;
