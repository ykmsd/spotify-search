/* global expect, it, jest */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { App } from './App';

const props = {
  setToken: jest.fn(),
  searchAlbum: jest.fn(),
  token: 'abc',
  items: [{ name: 'Taylor' }, { name: 'Gorillaz' }],
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><App {...props} /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
