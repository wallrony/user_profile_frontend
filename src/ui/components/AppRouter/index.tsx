import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppSwitch from '../AppSwitch';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppSwitch />
    </BrowserRouter>
  );
}

export default AppRouter;
