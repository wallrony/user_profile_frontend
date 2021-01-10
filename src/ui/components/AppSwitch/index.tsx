import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppRoute from '../../../core/models/AppRoute';
import { getRoutes } from '../../../core/utils/RouteUtils';
import { useUser } from '../../context/UserContext';

const AppSwitch: React.FC = () => {
  const { user } = useUser();
  const routes: AppRoute[] = getRoutes(user !== undefined);

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={`${index}-${route.path}`}
          exact
          path={route.path}
          render={
            props => <route.component {...props} />
          }
        />
      ))}
    </Switch>
  )
}

export default AppSwitch;
