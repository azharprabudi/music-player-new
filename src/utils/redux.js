import { createStore } from "redux";
import reducers from "@utils/reducers";
import middlewares, { runEpicMiddleware } from "@utils/middlewares";

const store = createStore(reducers, middlewares);
runEpicMiddleware();

export default store;
