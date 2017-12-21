import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
  }
  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  }
  handleSearchClick = (e) => {
    e.preventDefault();
    this.props.searchArtist(this.state.searchTerm, this.props.token);
    this.setState({
      searchTerm: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchClick}>
          <input
            type="text"
            className="search-input"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
          <button className="search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
