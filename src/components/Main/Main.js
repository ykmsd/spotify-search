// @flow

import React from 'react';
import Search from '../Search/Search';
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
      <Search {...props} />
      {
        props.items && <List items={props.items} />
      }
    </div>
  );
};

export default Main;
