import React, { useState } from 'react';
import { Dropdown, Menu, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

import AppRoute from '../../../core/models/AppRoute';
import NavButton from '../NavButton';
import { useUser } from '../../context/UserContext';
import { getRoutes } from '../../../core/utils/RouteUtils';

import './styles.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const AppHeader: React.FC = () => {
  const appHistory = useHistory();

  const { user, setUser } = useUser();
  const routes: AppRoute[] = getRoutes(user !== undefined);

  const [selectedPath, setSelectedPath] = useState(routes[0].path);

  const pathList: string[] = routes.map(route => route.path);

  if(!pathList.includes(window.location.pathname)) {
    setSelectedPath(pathList[0]);
    appHistory.push(pathList[0]);
  }

  function handleLogout() {
    setUser(undefined);

    appHistory.push('/');
  }

  let userDropdown;

  if(user) {
    const menu = (
      <Menu>
        <Menu.Item onClick={handleLogout} danger>
          Sair
        </Menu.Item>
      </Menu>
    );

    userDropdown = (
      <Dropdown
        overlay={menu}
      >
        <span style={{cursor: 'pointer'}}><UserOutlined size={36} /> <DownOutlined size={36} /></span>
      </Dropdown>
    );
  }

  return (
    <PageHeader
      className="app-header"
      title={<h2>Autenticação Simples</h2>}
      extra={[
        ...routes.map((route, index) => (
          <NavButton
            key={`${index}-${route.name}`}
            text={route.name}
            selected={selectedPath === route.path}
            onClick={() => {
              appHistory.push(route.path);
              setSelectedPath(route.path);
            }}
          />
        )),
        userDropdown
      ]}
    ></PageHeader>
  );
}

export default AppHeader;
