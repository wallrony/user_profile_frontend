import React from 'react';
import { Form, Input } from 'antd';

import PrimaryButton from '../PrimaryButton';
import AppForm from '../AppForm';

interface LoginFormProps {
  onFinish: (...values: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => (
  <AppForm
    id="app-login-form"
    title="Login"
    onFinish={onFinish}
  >
    <Form.Item
      label="E-mail"
      name="email"
      rules={[{required: true, message: 'Você precisa inserir o seu e-mail!'}]}
    >
      <Input
        type="email"
        allowClear
      />
    </Form.Item>
    <Form.Item
      label="Senha"
      name="password"
      rules={[{required: true, message: 'Você precisa inserir a sua senha!'}]}
    >
      <Input.Password
        allowClear
      />
    </Form.Item>
    <Form.Item>
      <PrimaryButton type="submit">Entrar</PrimaryButton>
    </Form.Item>
  </AppForm>
);

export default LoginForm;
