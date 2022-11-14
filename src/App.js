import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";

const App = () => (
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </HashRouter>
);

export default App;
