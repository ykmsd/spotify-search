// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import queryString from 'query-string';
import Main from '../src/components/Main/Main';
import Header from '../src/components/Header/Header';
import { config } from './config';
import './App.css';
import {
  searchAlbum,
  setToken,
} from './Actions/actionCreators';

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
    console.log(this.props);
    return (
      <div className="App">
        <Header {...this.props} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
