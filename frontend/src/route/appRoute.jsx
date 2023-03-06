import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/home";
import ShopLog from "../components/shoplog";
import SignIn from "../components/signin";
import FormInfo from "../components/signup";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => <Component {...props} />} />
);

class AppRoute extends Component {
  render() {
    return (
      <>
        <PrivateRoute exact path="/" component={ShopLog} />
        <PrivateRoute exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/signup" component={FormInfo} />
      </>
    );
  }
}
export default AppRoute;
