// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import 'antd/dist/antd.css';
import Main from '../src/components/Main/Main';
import {
  searchAlbum,
  setToken,
} from './Actions/actionCreators';
import { config } from './config';
import './App.css';

const clientId = config.CLIENT_ID;

type Props = {
  setToken: Function,
  searchAlbum: Function,
  token: string,
  items: Array<Object>,
};

class App extends React.Component<Props> {
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
        <h1>Spotify Seach <span role="img" aria-label="magnifying glass emoji">🔎</span></h1>
        <Main {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => state.reducer;

const mapDispatchToProps = dispatch => ({
  searchAlbum: (searchTerm, token) => {
    dispatch(searchAlbum(searchTerm, token));
  },
  setToken: (token) => {
    dispatch(setToken(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
