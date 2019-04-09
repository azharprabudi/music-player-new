import { createStore } from "redux";
import reducers from "@utils/reducers";
import middlewares from "@utils/middlewares";

const makeStore = () => {
  const store = createStore(reducers, null, middlewares);

  return store;
};

export default makeStore;
