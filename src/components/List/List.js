// @flow
import React from 'react';
import { Row, Col } from 'antd';

type Props = {
  items: Array<Object>,
}

const List = ({ items } : Props) => {
  return (
    <div>
      <Row>
        {
          items.map(item => (
            <Col span={6}>
              <img src={item.albums.images[0].url} alt={`${item.albums.name}`} width={300} />
            </Col>
            ))
        }
      </Row>
    </div>
  );
};

export default List;
