import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';

const Single = (props) => {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Search />

    </div>
  );
};

export default Single;
