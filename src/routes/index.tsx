import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signup" component={SingUp} />
    <Route exact path="/" component={SignIn} />
  </Switch>
);

export default Routes;
