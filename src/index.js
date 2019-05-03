import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Template from "@components/template";
import Homepage from "@pages/homepage";
import makeStore from "@utils/redux";

const App = () => (
  <Provider store={makeStore()}>
    <Router>
      <Template>
        <Homepage />
      </Template>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("music-player"));
