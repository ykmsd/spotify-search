export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    token,
  };
}

export function searchAlbumHasErrored(bool) {
  return {
    type: 'SEARCH_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function searchAlbumIsLoading(bool) {
  return {
    type: 'SEARCH_IS_LOADING',
    isLoading: bool,
  };
}

export function searchAlbumFetchDataSuccess(items) {
  return {
    type: 'SEARCH_FETCH_DATA_SUCCESS',
    items,
  };
}

export function searchAlbum(searchTerm, token) {
  return (dispatch) => {
    const FETCH_URL = `https://api.spotify.com/v1/search?q=artist:${searchTerm}&type=album`;

    const myOptions = {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    };
    
    dispatch(searchAlbumIsLoading(true));

    fetch(FETCH_URL, myOptions)
      .then((res) => {
        dispatch(searchAlbumIsLoading(false));
        return res;
      })
      .then(res => res.json())
      .then((res) => {
        res.items = res.albums.items.map((item) => {
          return {
            albums: item,
          };
        });
        return res.items;
      })
      .then(items => dispatch(searchAlbumFetchDataSuccess(items)))
      .catch(() => dispatch(searchAlbumHasErrored(true)));
  };
}
