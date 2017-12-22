/* global expect, it, describe */
import {
  setToken,
  searchAlbumHasErrored,
  searchAlbumIsLoading,
  searchAlbum,
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
    it('Should return true when true is passed', () => {
      expect(searchAlbumHasErrored(true, {})).toEqual(true);
      expect(searchAlbumIsLoading(true, {})).toEqual(true);
    });
  });
});
