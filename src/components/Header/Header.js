import React from 'react';
import Search from '../Search/Search';

const Header = (props) => {
  return (
    <div>
        <h1>Spotify Seach <span role="img" aria-label="magnifying glass emoji">🔎</span></h1>
      <Search {...props} />
    </div>
  );
};

export default Header;
