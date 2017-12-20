import React, { Component } from 'react';
import queryString from 'query-string';
import Search from '../src/components/Search/Search';
import { config } from './config';

const clientId = config.CLIENT_ID;

class App extends Component {
  componentDidMount() {
    const parsedHash = queryString.parse(window.location.hash);
    if (!parsedHash.access_token) {
      const encodeURI = window.encodeURI(`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/callback/&response_type=token&state=123`); 
      window.location.href = encodeURI;
    } else {
      console.log(parsedHash);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Spotify Seach</h1>
        <Search />
      </div>
    );
  }
}

export default App;
