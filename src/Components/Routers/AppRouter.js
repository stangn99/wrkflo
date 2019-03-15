import React, { Component, Fragment } from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';


class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/task/:taskId" component={TaskDetails} />
              <Route component={NotFound} />
            </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default AppRouter;
