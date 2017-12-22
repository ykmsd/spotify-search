/* global expect, it, describe */
import {
  setToken,
  searchAlbumHasErrored,
  searchAlbumIsLoading,
  albums,
} from './reducer';

describe('Reducer', () => {
  describe('Set token', () => {
    it('Should return the correct state', () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      const action = {
        type: 'SET_TOKEN',
        token,
      };
      expect(setToken(undefined, action)).toEqual(token);
    });
  });
  describe('Search', () => {
    it('Should handle SEARCH_HAS_ERRORED', () => {
      expect(searchAlbumHasErrored(undefined, {
        type: 'SEARCH_HAS_ERRORED',
        hasErrored: true,
      })).toEqual(true);
    });

    it('Should handle SEARCH_IS_LOADING', () => {
      expect(searchAlbumIsLoading(undefined, {
        type: 'SEARCH_IS_LOADING',
        isLoading: true,
      })).toEqual(true);
    });

    it('Should handle SEARCH_FETCH_DATA_SUCCESS', () => {
      expect(albums([], {
        type: 'SEARCH_FETCH_DATA_SUCCESS',
        albums: [{
          artist_name: 'Taylor Swift',
        }],
      })).toEqual([{
        artist_name: 'Taylor Swift',
      }]);
    });
  });
});
