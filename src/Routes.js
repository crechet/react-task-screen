import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from './components/Tasks/Tasks.container';
import NotFound from './components/NotFound';

export default () => {
  return(
    <Switch>
      <Route path="/" exact component={Tasks} />
      <Route component={NotFound} />
    </Switch>
  );
};
