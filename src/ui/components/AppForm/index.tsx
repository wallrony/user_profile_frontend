import React from 'react';
import { Form } from 'antd';

import './styles.css';

interface AppFormProps {
  id?: string;
  title: string;
  onFinish: (...values: any) => void;
}

const AppForm: React.FC<AppFormProps> = ({ children, id, title, onFinish }) => (
  <Form
    id={id}
    className="app-form"
    onFinish={onFinish}
  >
    <h2 className="form-title">{title}</h2>
    {children}
  </Form>
);

export default AppForm;
