import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './_pages/MainPage';

export const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        component={MainPage}
      />
    </Switch>
  </Router>
);
