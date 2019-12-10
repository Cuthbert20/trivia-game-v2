import React from "react";
import Landing from "./Components/Landing/Landing";
import { Switch, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import FreePlay from "./Components/FreePlay/FreePlay";
import About from "./Components/About/About";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/register" component={Register} />
    <Route path="/freeplay" component={FreePlay} />
    <Route path="/about" component={About} />
  </Switch>
);
