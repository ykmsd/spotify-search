// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Single from '../Single/Single';
import List from '../List/List';

type Props = {
  searchAlbum: Function,
  setToken: Function,
  token: string,
  albums: Array<Object>,
  hasErrored: boolean,
  isLoading: boolean,
}

const Main = (props: Props) => {
  return (
    <div>
      <Switch>
        <Route path="/callback" render={routeProps => (<List routeProps={routeProps} {...props} />)} />
        <Route path="/:albumId" render={routeProps => (<Single routeProps={routeProps} albums={props.albums} />)} />
      </Switch>
    </div>
  );
};

export default Main;
