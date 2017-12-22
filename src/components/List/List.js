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
      <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 16 }}>
        {
          albums &&
            albums.map(album => (
              <Col xs={12} sm={10} md={8} lg={6} xl={4} style={{ marginBottom: '20px' }} key={album.id}>
                <Link to={`/view/${album.id}`}>
                  <Card
                    cover={<img src={album.imgL_url} alt={`${album.album_name}`} style={{ maxHeight: '280px' }} />}
                    hoverable
                  >
                    <Meta
                      title={album.album_name}
                      description={album.artist_name}
                    />
                  </Card>
                </Link>
              </Col>
              
            ))
        }
      </Row>
    </div>
  );
};

export default List;
