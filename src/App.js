import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Home";

const App = () => (
  <HashRouter>
    <Route exact path="/" component={Home} />
  </HashRouter>
);

export default App;
