import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Search from '../src/components/Search/Search';
import {
  searchArtist,
  setToken,
} from './Actions/actionCreators';
import { config } from './config';

const clientId = config.CLIENT_ID;

class App extends Component {
  componentDidMount() {
    const parsedHash = queryString.parse(window.location.hash);
    if (!parsedHash.access_token) {
      const encodeURI = window.encodeURI(`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/callback/&response_type=token&state=123`); 
      window.location.href = encodeURI;
    } else {
      this.props.setToken(parsedHash.access_token);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Spotify Seach</h1>
        <Search {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => state.reducer;

const mapDispatchToProps = dispatch => ({
  searchArtist: (searchTerm, token) => {
    dispatch(searchArtist(searchTerm, token));
  },
  setToken: (token) => {
    dispatch(setToken(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
