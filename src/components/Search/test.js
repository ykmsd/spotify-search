/* global expect, it, describe, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Search />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.search-input').length).toEqual(1);
  });

  it('Should have a search button', () => {
    expect(component.find('.search-button').length).toEqual(1);
  });
});
