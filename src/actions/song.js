export const FETCH_POPULAR_SONGS = "@SONG/FETCH_POPULAR_SONGS";
export const SUCCESS_FETCH_POPULAR_SONGS = "@SONG/SUCCESS_FETCH_POPULAR_SONGS";
export const SEARCH_SONG = "@SONG/SEARCH_SONG";
export const SUCCESS_SEARCH_SONG = "@SONG/SUCCESS_SEARCH_SONG";

export const fetchPopularSongs = () => ({
  type: FETCH_POPULAR_SONGS
});

export const searchSong = search => ({
  type: SEARCH_SONG,
  payload: search
});
