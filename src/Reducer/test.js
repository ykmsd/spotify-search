/* global expect, it, describe */
import reducer from './reducer';
import albumData from '../data';

describe('Reducer', () => {
  // it('Should return the initial state when no action passed', () => {
  //   expect(reducer(undefined, {})).toEqual(initialState);
  // });

  describe('Set token', () => {
    it('Should return the correct state', () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      const action = {
        type: 'SET_TOKEN',
        token,
      };

      const expectedState = {
        ...albumData,
        token,
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
