import React from "react";
import Landing from "./Components/Landing/Landing";
import { Switch, Route } from "react-router-dom";
import Register from "./Components/Register/Register";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/register" component={Register} />
  </Switch>
);
