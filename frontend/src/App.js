import React from "react";
import "./App.css";
import Home from "./components/home";
import AppComponent from "./route/appRoute.jsx";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Home />
        <Switch>
          <Route path="/" component={AppComponent} />
        </Switch>
      </>
    );
  }
}
export default App;
