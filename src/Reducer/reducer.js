const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SEARCH_HAS_ERRORED':
      return action.hasErroed;
    case 'searchAlbumIsLoading':
      return action.isLoading;
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
