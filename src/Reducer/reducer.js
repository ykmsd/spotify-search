// import albumData from '../data';

export const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SEARCH_FETCH_DATA_SUCCESS':
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
