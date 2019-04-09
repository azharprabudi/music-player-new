import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

const middlewares = applyMiddleware(createEpicMiddleware());

export default (process.env.MUSIC_PLAYER_NODE_ENV === "development"
  ? composeWithDevTools(middlewares)
  : middlewares);
