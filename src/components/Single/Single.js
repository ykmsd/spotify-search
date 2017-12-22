import * as React from 'react';
import { Row, Col, Button, Icon } from 'antd';

type Props = {
  routeProps: Object,
  albums: Array<Object>,
}

const Single = ({ routeProps, albums } : Props) => {
  const { albumId } = routeProps.match.params;
  const i = albums.findIndex(album => album.id === albumId);
  const album = albums[i];
  return (
    <div>
      <Row gutter={16} type="flex" justify="center" style={{ marginBottom: '40px' }}>
        <Col span={6}>
          <iframe src={`https://open.spotify.com/embed?uri=${album.uri}&theme=white`} width="300" height="380" frameBorder="0" allowtransparency="true" title="Spotify Player" />
        </Col>
        <Col span={6}>
          <h2>{album.album_name}</h2>
          <h3>{album.artist_name}</h3>
          <img src={album.imgS_url} alt={album.album_name} />
        </Col>
      </Row>
      <Button type="primary" onClick={routeProps.history.goBack}>
        <Icon type="left" />Go back
      </Button>
    </div>
  );
};

export default Single;
