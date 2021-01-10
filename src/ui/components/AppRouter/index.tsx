import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { showToast } from '../../../core/utils/ToastUtils';
import StorageController from '../../../data/static/StorageController';
import UsersService from '../../../services/implementation/UsersService';
import { useUser } from '../../context/UserContext';

import AppHeader from '../AppHeader';
import AppSwitch from '../AppSwitch';
import LoadingView from '../LoadingView';
import { Toast } from '../Toast';

const AppRouter: React.FC = () => {
  useEffect(() => {
    async function fetchUser(id: number) {
      const result = await new UsersService().show(id);

      if(result.err) {
        showToast(result.err);

        StorageController.clearAll();
      } else {
        setUser(result.data);
      }
    }

    const userID = StorageController.getUserID();

    if(userID) {
      fetchUser(userID);
    }
  }, [])

  const { setUser } = useUser();

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
