import { createStore } from "redux";
import reducers from "@utils/reducers";
import middlewares, { runEpicMiddleware } from "@utils/middlewares";

const makeStore = () => {
  const store = createStore(reducers, middlewares);
  runEpicMiddleware();

  return store;
};

export default makeStore;
