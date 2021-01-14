import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import { Layout } from '../components/Layout';
import Header from './Header';
import '../css/styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Router>
            <Header />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Page" component={Page} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
