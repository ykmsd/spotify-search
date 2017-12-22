// @flow
import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const { Meta } = Card;

type Props = {
  albums: Array<Object>,
  hasErrored: boolean,
  isLoading: boolean,
  searchAlbum: Function,
  token: string,
}

const List = ({
  albums,
  hasErrored,
  isLoading,
  searchAlbum,
  token,
} : Props) => {
  if (hasErrored) {
    return <p>Sorry! There was an error loading the albums. Please try again later.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Search searchAlbum={searchAlbum} token={token} />
      <Row gutter={16}>
        {
          albums && 
            albums.map(album => (
              <Link to={`/${album.id}`} key={album.id}>
                <Col span={4} style={{ marginBottom: '20px' }}>
                  <Card
                    cover={<img src={album.imgL_url} alt={`${album.album_name}`} />}
                    hoverable
                  >
                    <Meta
                      title={album.album_name}
                      description={album.artist_name}
                    />
                  </Card>
                </Col>
              </Link>
            ))
        }
      </Row>
    </div>
  );
};

export default List;
