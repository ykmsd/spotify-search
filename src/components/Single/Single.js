import * as React from 'react';
import { Row, Col, Button, Icon } from 'antd';

type Props = {
  routeProps: Object,
  items: Array<Object>,
}

const Single = ({ routeProps, items } : Props) => {
  const { albumId } = routeProps.match.params;
  const i = items.findIndex(album => album.albums.id === albumId);
  const album = items[i];
  const { albums } = album;
  return (
    <div>
      <Row gutter={16} type="flex" justify="center" style={{ marginBottom: '40px' }}>
        <Col span={6}>
          <iframe src={`https://open.spotify.com/embed?uri=${albums.uri}&theme=white`} width="300" height="380" frameBorder="0" allowtransparency="true" title="Spotify Player" />
        </Col>
        <Col span={6}>
          <h2>{albums.name}</h2>
          <h3>{albums.artists[0].name}</h3>
          <img src={albums.images[1].url} alt={albums.name} />             
        </Col>
      </Row>
      <Button type="primary" onClick={routeProps.history.goBack}>
        <Icon type="left" />Go back
      </Button>
    </div>
  );
};

export default Single;
