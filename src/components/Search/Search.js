// @flow
import * as React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

type Props = {
  searchAlbum: Function,
  token: string,
};

type State = {
  searchTerm: string,
  error: string,
};

class Search extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      error: '',
    };
  }
  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  }
  handleSearchClick = (e) => {
    e.preventDefault();
    if (!this.state.searchTerm) {
      this.setState(() => ({ error: 'Please provide a search term!' }));
    } else {
      this.props.searchAlbum(this.state.searchTerm, this.props.token);
      this.setState({
        searchTerm: '',
        error: '',
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error} </p>}
        <Form onSubmit={this.handleSearchClick} layout="inline" style={{ marginBottom: '20px'}}>
          <FormItem>
            <Input
              type="text"
              className="search-input"
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
              placeholder="Search by Artist name"
              style={{ width: '200px' }}
            />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="search-button"
            >
              Search
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Search;
