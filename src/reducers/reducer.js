export function searchAlbumHasErrored(state = false, action) {
  switch (action.type) {
    case 'SEARCH_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function searchAlbumIsLoading(state = false, action) {
  switch (action.type) {
    case 'SEARCH_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function albums(state = [], action) {
  switch (action.type) {
    case 'SEARCH_FETCH_DATA_SUCCESS':
      return action.albums;
    default:
      return state;
  }
}

export function setToken(state = {}, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}
