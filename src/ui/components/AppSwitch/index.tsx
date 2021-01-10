import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import AppRoute from '../../../core/models/AppRoute';
import { getRoutes } from '../../../core/utils/RouteUtils';
import { useUser } from '../../context/UserContext';

const AppSwitch: React.FC = () => {
  const appHistory = useHistory();

  const { user } = useUser();
  let routes: AppRoute[] = getRoutes(user !== undefined);

  const pathList: string[] = routes.map(route => route.path);

  if(!pathList.includes(window.location.pathname)) {
    appHistory.push(pathList[0]);
  }

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={`${index}-${route.path}`}
          path={route.path}
          render={
            props => <route.component {...props} />
          }
          exact
        />
      ))}
    </Switch>
  )
}

export default AppSwitch;
