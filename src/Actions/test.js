/* global expect, it, describe */
import { setToken } from './actionCreators';

describe('Actions', () => {
 const todoText = 'Gorillaz';

 it('Should create an action to search an artist', () => {
  // const expectedAction = {
  //   type: 
  // }
 });

  describe('Token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    it('Should create an action to set token', () => {
      const expectedAction = {
        type: 'SET_TOKEN',
        token,
      };

      expect(setToken(token)).toEqual(expectedAction);
    });
  });
});
