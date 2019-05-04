import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { fetchPopularSongs$, searchSong$ } from "@epics/song";

const _epics = combineEpics(fetchPopularSongs$, searchSong$);
const epicMiddleware = createEpicMiddleware();
const _middlewares = applyMiddleware(epicMiddleware);

export const runEpicMiddleware = () => epicMiddleware.run(_epics);
export default (process.env.MUSIC_PLAYER_NODE_ENV === "development"
  ? composeWithDevTools(_middlewares)
  : _middlewares);
