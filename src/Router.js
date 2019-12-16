import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/MainPage" component={App} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;