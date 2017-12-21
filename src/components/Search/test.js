/* global expect, it, describe, beforeEach, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  let component;
  const searchMock = jest.fn();

  beforeEach(() => {
    component = shallow(<Search searchAlbum={searchMock} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.search-input').length).toEqual(1);
  });

  describe('Search button', () => {
    // it('Should have a search button', () => {
    //   expect(component.find('.search-button .ant-btn-primary')).to.have.length(1);
    // });

    it('Should call the handleSearchClick function when clicked', () => {
      component = mount(<Search searchAlbum={searchMock} />);

      expect(searchMock.mock.calls.length).toEqual(0);
      component.find('.search-button .ant-btn-primary').simulate('submit');
      expect(searchMock.mock.calls.length).toEqual(1);
    });
  });
});
