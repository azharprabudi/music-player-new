import {
  SEARCH_SONG,
  SUCCESS_SEARCH_SONG,
  FAILED_SEARCH_SONG,
  RESET_SEARCH_SONG
} from "@actions/song";

const INITIAL_STATE = {
  items: [],
  load: false,
  itemsSearch: [],
  loadSearch: false
};

const SongReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SEARCH_SONG:
      return {
        ...state,
        loadSearch: true
      };
    case SUCCESS_SEARCH_SONG:
      return {
        ...state,
        loadSearch: false,
        itemsSearch: payload
      };
    case FAILED_SEARCH_SONG:
      return {
        ...state,
        itemsSearch: []
      };
    case RESET_SEARCH_SONG:
      return {
        ...state,
        itemsSearch: [],
        loadSearch: false
      };
    default:
      return state;
  }
};

export default SongReducer;
