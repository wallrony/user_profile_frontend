import React from 'react';
import {
  hideLoadingView,
  showLoadingView
} from '../../../../core/utils/LoadingViewUtils';

import BasePage from '../../../components/BasePage';
import LoginForm from '../../../components/LoginForm';

const LoginPage: React.FC = () => {

  async function onFinish(values: any) {
    showLoadingView();

    // const credentials: AuthCredentials = {
    //   email: values['email'],
    //   password: values['password'],
    // };

    // REALIZAR LOGIN

    hideLoadingView();
  }

  return (
    <BasePage>
      <LoginForm onFinish={onFinish} />
    </BasePage>
  );
}

export default LoginPage;
