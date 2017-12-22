// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Single from '../Single/Single';
import List from '../List/List';
import Init from '../Init/Init';
import NoMatch from '../NoMatch/NoMatch';

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
        <Route path="/" component={Init} exact />
        <Route path="/callback" render={routeProps => (<List routeProps={routeProps} {...props} />)} />
        <Route path="/view/:albumId" render={routeProps => (<Single routeProps={routeProps} albums={props.albums} />)} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Main;
