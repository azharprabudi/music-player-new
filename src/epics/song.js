import {
  concatMap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  retryWhen,
  delayWhen
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import {
  SEARCH_SONG,
  SUCCESS_SEARCH_SONG,
  FAILED_SEARCH_SONG,
  FETCH_POPULAR_SONGS,
  SUCCESS_FETCH_POPULAR_SONGS
} from "@actions/song";
import musixMatchErrorHandler$ from "@utils/musix-match-error-handler$";
import { timer } from "rxjs";

export const fetchPopularSongs$ = action$ =>
  action$.pipe(
    ofType(FETCH_POPULAR_SONGS),
    concatMap(() => {
      const url = `${process.env.MUSIC_PLAYER_BASE_URL}/chart.tracks.get`;
      const params = `?country=${id}&chart_name=${top}&apikey=${
        process.env.MUSIC_PLAYER_API_KEY
      }`;

      return ajax.get(`${url}${params}`, {
        "Content-Type": "application/json",
        Accept: "application/json"
      });
    }),
    musixMatchErrorHandler$(),
    retryWhen(err => err.pipe(delayWhen(_ => timer(3000)))),
    map(({ message: { body: { track_list } } }) => ({
      type: SUCCESS_FETCH_POPULAR_SONGS,
      payload: track_list
    }))
  );

export const searchSong$ = action$ =>
  action$.pipe(
    ofType(SEARCH_SONG),
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(({ payload }) => {
      const url = `${process.env.MUSIC_PLAYER_BASE_URL}/track.search`;
      const params = `?q=${payload}&apikey=${
        process.env.MUSIC_PLAYER_API_KEY
      }&s_track_rating=asc`;

      return ajax.get(`${url}${params}`, {
        "Content-Type": "application/json",
        Accept: "application/json"
      });
    }),
    musixMatchErrorHandler$(),
    catchError(_ => ({
      type: FAILED_SEARCH_SONG
    })),
    map(({ response: { message: { body } } }) => ({
      type: SUCCESS_SEARCH_SONG,
      payload: body.track_list
    }))
  );
