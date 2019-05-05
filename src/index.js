import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Template from "@components/template";
import store from "@utils/redux";
import Routes from "@navigation/routes";

const App = () => (
  <Provider store={store}>
    <Router>
      <Template>
        <Switch>
          {Routes.map(({ children }) =>
            children.map(({ component: Component, path, exact }) => (
              <Route exact={exact} component={Component} path={path} />
            ))
          )}
        </Switch>
      </Template>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("music-player"));
