/* global expect, it, describe */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { setToken, searchArtist } from './actionCreators';

describe('Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  
  const searchTerm = 'Gorillaz';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
 
  describe('Token', () => {
    it('Should create an action to set token', () => {
      const expectedAction = {
        type: 'SET_TOKEN',
        token,
      };

      expect(setToken(token)).toEqual(expectedAction);
    });
  });

  describe('Search', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('Should create SEARCH_FETCH_DATA_SUCCESS when fethcing has been done', () => {
      fetchMock
        .getOnce()
    });     
  });
});
