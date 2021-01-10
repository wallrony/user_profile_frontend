import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppHeader from '../AppHeader';
import AppSwitch from '../AppSwitch';
import LoadingView from '../LoadingView';
import { Toast } from '../Toast';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppSwitch />
      <LoadingView />
      <Toast />
    </BrowserRouter>
  );
}

export default AppRouter;
