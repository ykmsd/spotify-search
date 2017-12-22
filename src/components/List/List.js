// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;


type Props = {
  items: Array<Object>,
}

const List = ({ items } : Props) => {
  return (
    <div>
      <Row gutter={16}>
        {
          items.map(item => (
            <Link to={`/view/${item.albums.id}`} key={item.albums.id}>
              <Col span={4} style={{ marginBottom: '20px' }}>
                  <Card
                    cover={<img src={item.albums.images[0].url} alt={`${item.albums.name}`} />}
                    hoverable
                  >
                    <Meta
                      title={item.albums.name}
                      description={item.albums.artists[0].name}
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
