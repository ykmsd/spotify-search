// @flow
import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;


type Props = {
  items: Array<Object>,
}

const List = ({ items } : Props) => {
  console.log(items);
  return (
    <div>
      <Row gutter={16}>
        {
          items.map(item => (
            <Col span={4} key={item.albums.id} style={{ marginBottom: '20px' }}>
              <a href={item.albums.external_urls.spotify} target="_blank">
                <Card
                  cover={<img src={item.albums.images[0].url} alt={`${item.albums.name}`} />}
                  hoverable
                >
                  <Meta
                    title={item.albums.name}
                    description={item.albums.artists[0].name}
                  />
                </Card>
              </a>
            </Col>
            ))
        }
      </Row>
    </div>
  );
};

export default List;
