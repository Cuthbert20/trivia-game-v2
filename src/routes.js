import React from "react";
import Landing from "./Components/Landing/Landing";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
);
