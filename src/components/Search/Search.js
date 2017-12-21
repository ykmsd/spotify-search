import * as React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

type Props = {
  searchAlbum: Function,
}

class Search extends React.Component<Props> {
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
    this.props.searchAlbum(this.state.searchTerm, this.props.token);
    this.setState({
      searchTerm: '',
    });
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSearchClick} layout="inline" style={{ marginBottom: '20px'}}>
          <FormItem>
            <Input
              type="text"
              className="search-input"
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
              placeholder="Search by Artist"
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
