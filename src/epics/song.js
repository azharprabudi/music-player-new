import { concatMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import axios$ from "@utils/axios$";
import {
  FETCH_POPULAR_SONGS,
  SUCCESS_FETCH_POPULAR_SONGS
} from "@actions/song";

export const fetchPopularSongs$ = action$ =>
  action$.pipe(
    ofType(FETCH_POPULAR_SONGS),
    concatMap(() =>
      axios$({
        url: "/chart.tracks.get",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        params: {
          country: "id",
          chart_name: "top",
          callback: "jsonp_callback",
          apikey: process.env.MUSIC_PLAYER_API_KEY
        }
      })
    ),
    map(({ message: { body: { track_list } } }) => ({
      type: SUCCESS_FETCH_POPULAR_SONGS,
      payload: track_list
    }))
  );
