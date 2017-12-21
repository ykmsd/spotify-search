/* global expect, it, describe, beforeEach, jest */

import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  let component;

  const items = [
    {
      albums: {
        name: 'reputation',
        artists: ['Taylor Swift'],
        id: '4fW1sFeE43nuZlAw2xtmC3',
        images: [{
          url: 'https://i.scdn.co/image/39cb05d373ddb356dd8f5357810ab35fdec9f6e1',
        }],
      },
    },
  ];

  beforeEach(() => {
    component = shallow(<List items={items} />);
  });


  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  // it('Should render the same number of images as the items length', () => {
  //   expect(component.find('img').length).toEqual(items.length);
  // });
});
