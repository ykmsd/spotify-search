export function searchHasErroed(bool) {
  return {
    type: 'SEARCH_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function searchIsLoading(bool) {
  return {
    type: 'SEARCH_IS_LOADING',
    isLoading: bool,
  };
}

export function searchFetchDataSuccess(items) {
  return {
    type: 'SEARCH_FETCH_DATA_SUCCESS',
    items,
  };
}