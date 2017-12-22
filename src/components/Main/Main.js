// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Single from '../Single/Single';
import List from '../List/List';

type Props = {
  searchAlbum: Function,
  setToken: Function,
  token: string,
  items: Array<Object>,
}

const Main = (props: Props) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact />
        <Route path="/callback" render={routeProps => (<List routeProps={routeProps} {...props} />)} exact />
        <Route path="/:albumId" render={routeProps => (<Single routeProps={routeProps} items={props.items} />)} />
      </Switch>
    </div>
  );
};

export default Main;
