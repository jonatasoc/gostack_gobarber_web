import React from 'react';

import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SingUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
