import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ThemeContainer from '../Theme/ThemeContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ThemeContainer} />
      </Switch>
    </Router>
  );
}
