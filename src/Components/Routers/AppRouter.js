import React, { Component, Fragment } from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


class AppRouter extends Component {
  render() {
    return (
      <Fragment>

        <Router>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/task/:id" component={TaskDetails} />
          </Switch>
        </Router>
        <Dashboard />
      </Fragment>
    );
  }
}

export default AppRouter;
