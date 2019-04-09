import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Homepage from "@pages/homepage";
import makeStore from "@utils/redux";

const App = () => (
  <Provider store={makeStore()}>
    <Homepage />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("music-player"));
