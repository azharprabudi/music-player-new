import { combineReducers } from "redux";
import SongReducer from "@reducers/song";

export default combineReducers({
  song: SongReducer
});
