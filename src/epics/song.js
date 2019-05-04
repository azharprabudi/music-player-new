import {
  concatMap,
  map,
  debounce,
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
  mapTo,
  switchMap,
  takeUntil,
  mergeMap
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import {
  FETCH_POPULAR_SONGS,
  SUCCESS_FETCH_POPULAR_SONGS
} from "@actions/song";
import { SEARCH_SONG } from "../actions/song";
import { Observable, of } from "rxjs";

export const fetchPopularSongs$ = action$ =>
  action$.pipe(
    ofType(FETCH_POPULAR_SONGS),
    concatMap(() => {
      const url = `${process.env.MUSIC_PLAYER_BASE_URL}/chart.tracks.get`;
      const params = `?country=${id}&chart_name=${top}&callback=${jsonp_callback}&apikey=${
        process.env.MUSIC_PLAYER_API_KEY
      }`;

      return ajax.get(`${url}${params}`, {
        "Content-Type": "application/json",
        Accept: "application/json"
      });
    }),
    map(({ message: { body: { track_list } } }) => ({
      type: SUCCESS_FETCH_POPULAR_SONGS,
      payload: track_list
    }))
  );

export const searchSong$ = action$ =>
  action$.pipe(
    ofType(SEARCH_SONG),
    debounceTime(250),
    filter(({ payload }) => payload.length > 4),
    distinctUntilChanged(),
    mergeMap(() =>
      of({
        type: "kondel"
      })
    ),
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
    map(resp => {
      console.log("resp");
      return {
        type: "test"
      };
    })
  );
