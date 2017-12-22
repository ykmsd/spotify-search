import { combineReducers } from 'redux';
import { 
  searchAlbumHasErrored,
  searchAlbumIsLoading,
  albums,
  setToken,
} from './reducer';

export default combineReducers({
  searchAlbumHasErrored,
  searchAlbumIsLoading,
  albums,
  setToken,
});
