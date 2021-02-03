import { red } from 'kleur';
import React from 'react';
import { BrowserRouter as Router,
   Route, Switch } from 'react-router-dom';
import NewsSearch from '../../containers/NewsSearch';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route path="/" component={NewsSearch}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
};


