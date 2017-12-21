export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    token,
  };
}

export function searchArtistHasErroed(bool) {
  return {
    type: 'SEARCH_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function searchArtistIsLoading(bool) {
  return {
    type: 'SEARCH_IS_LOADING',
    isLoading: bool,
  };
}

export function searchArtistFetchDataSuccess(items) {
  console.log(items);
  return {
    type: 'SEARCH_FETCH_DATA_SUCCESS',
    items,
  };
}

export function searchArtist(searchTerm, token) {
  return (dispatch) => {
    const FETCH_URL = `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`;

    const myOptions = {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    };
    
    dispatch(searchArtistIsLoading(true));

    fetch(FETCH_URL, myOptions)
      .then(res => res.json())
      .then((res) => {
        console.log(res.items);
        res.items = res.artists.items.map((item) => {
          return {
            artist: item,
          };
        });
        
        dispatch(searchArtistFetchDataSuccess(res.items));
      });
  };
}
