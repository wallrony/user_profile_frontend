import React from 'react';
import AuthorizedUser from '../../../../core/models/AuhorizedUser';
import AuthCredentials from '../../../../core/models/AuthCredentials';
import ServiceResponse from '../../../../core/models/ServiceResponse';
import {
  hideLoadingView,
  showLoadingView
} from '../../../../core/utils/LoadingViewUtils';
import { showToast } from '../../../../core/utils/ToastUtils';
import AuthService from '../../../../services/implementation/AuthService';

import BasePage from '../../../components/BasePage';
import LoginForm from '../../../components/LoginForm';
import { useUser } from '../../../context/UserContext';

const LoginPage: React.FC = () => {
  const { signIn } = useUser();

  async function onFinish(values: any) {
    showLoadingView();

    const credentials: AuthCredentials = {
      email: values['email'],
      password: values['password'],
    };

    const result = await new AuthService().login(credentials);

    hideLoadingView();
    
    treatLogin(result);
  }

  function treatLogin(result: ServiceResponse<AuthorizedUser>) {
    if(result.err) {
      showToast(result.err);
    } else if(result.data) {
      signIn(result.data);
    }
  }

  return (
    <BasePage>
      <LoginForm onFinish={onFinish} />
    </BasePage>
  );
}

export default LoginPage;
