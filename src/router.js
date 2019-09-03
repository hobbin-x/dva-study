import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Product/Product';
import Count from './routes/Count';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" component={Products} />
        <Route path="/count" component={Count} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
