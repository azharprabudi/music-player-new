import { FETCH_POPULAR_SONGS } from "@actions/song";
import { map } from "rxjs/operators";

export const fetchPopularSongs$ = action$ =>
  action$.ofType(FETCH_POPULAR_SONGS).pipe(map(console.log));
