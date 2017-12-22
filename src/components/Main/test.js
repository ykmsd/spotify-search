/* global describe, expect, it, jest */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from './Main';
import Single from '../Single/Single';
import List from '../List/List';
import Init from '../Init/Init';
import NoMatch from '../NoMatch/NoMatch';

describe('Main', () => {

  const props = {
    searchAlbum: jest.fn(),
    setToken: jest.fn(),
    token: 'abc',
    albums: [{ name: 'Taylor' }, { name: 'Gorillaz' }],
    hasErrored: false,
    isLoading: false,
  };

  const SingleProps = {
    routeProps: {
      history: {
        goBack: jest.fn(),
      },
      match: {
        params: '12',
      },
    },
    albums: [{ name: 'Taylor' }, { name: 'Gorillaz' }],
  };

  const ListProps = {
    albums: [{ name: 'Taylor' }, { name: 'Gorillaz' }],
    hasErrored: false,
    isLoading: false,
    searchAlbum: jest.fn(),
    token: 'abc',
  };
  

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter><Main {...props} /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('callback routing', () => {
    const tree = renderer.create(<MemoryRouter initialEntries={['/callback']}><List {...ListProps} /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('view albumId routing', () => {
    const tree = renderer.create(<MemoryRouter initialEntries={['/view/:albumId']}><Single {...SingleProps} /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('no match routing', () => {
    const tree = renderer.create(<MemoryRouter initialEntries={['/404']}><NoMatch /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
