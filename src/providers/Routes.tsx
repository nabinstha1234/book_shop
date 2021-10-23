import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from 'config/routes';
import { PublicRoute, ProtctedRoute } from 'routes';

/*
########################
You can pass role to the ProtectedRoute component to restrict access to the route.
TODO: add role props in protected route and validate it in the component.
########################
*/

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path={routes.login.path} component={routes.login.component} />
        <ProtctedRoute path={routes.home.path} component={routes.home.component} />
      </Switch>
    </Router>
  );
};
