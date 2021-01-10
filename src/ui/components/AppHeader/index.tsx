import React, { useState } from 'react';
import { PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

import AppRoute from '../../../core/models/AppRoute';
import NavButton from '../NavButton';
import { useUser } from '../../context/UserContext';
import { getRoutes } from '../../../core/utils/RouteUtils';

import './styles.css';

const AppHeader: React.FC = () => {
  const appHistory = useHistory();

  const { user } = useUser();
  const routes: AppRoute[] = getRoutes(user !== undefined);

  const [selectedPath, setSelectedPath] = useState(routes[0].path);

  return (
    <PageHeader
      className="app-header"
      title={<h2>Autenticação Simples</h2>}
      extra={routes.map((route, index) => (
        <NavButton
          key={`${index}-${route.name}`}
          text={route.name}
          selected={selectedPath === route.path}
          onClick={() => {
            appHistory.push(route.path);
            setSelectedPath(route.path);
          }}
        />
      ))}
    ></PageHeader>
  );
}

export default AppHeader;
