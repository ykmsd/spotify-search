import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import Single from './components/Single/Single';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} {...this.props} exact />
        <Route path="/callback/" component={App} {...this.props} exact />
        <Route path="/view/:albumId" component={Single} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
registerServiceWorker();
