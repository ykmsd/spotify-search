import * as React from 'react';
import { Row, Col, Button, Icon } from 'antd';

type Props = {
  routeProps: Object,
  items: Array<Object>,
}

class Single extends React.Component<Props> {
  render() {
    const albumId = this.props.routeProps.match.params.albumId;
    const i = this.props.items.findIndex(album => album.albums.id === albumId);
    const album = this.props.items[i];
    const { albums } = album;
    return (
      <div>
        <Row gutter={16} type="flex" justify="center" style={{ marginBottom: '40px' }}>
          <Col span={6}>
          <iframe src={`https://open.spotify.com/embed?uri=${albums.uri}&theme=white`} width="300" height="380" frameBorder="0" allowtransparency="true" title="Spotify Player"></iframe>
          </Col>
          <Col span={6}>
            <h2>{albums.name}</h2>
            <h3>{albums.artists[0].name}</h3>
            <img src={albums.images[1].url} alt={albums.name} />             
          </Col>
        </Row>
        <Button type="primary" onClick={this.props.routeProps.history.goBack}>
          <Icon type="left" />Go back
        </Button>
      </div>
    );
  }
}

export default Single;
