import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import FullName from "./components/FullName";
import NavBar from "./components/NavBar";

import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

const App = () => {
  const [text, changeText] = useState("Choose your mode.");
  const [selected, setSelected] = useState();

  return (
    <HashRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <FullName />
        <NavBar selected={selected} changeText={changeText} />
        <Routes>
          <Route exact path="/" element={<Home text={text} />} />
          <Route
            exact
            path="/about"
            element={<About setSelected={setSelected} />}
          />
          <Route
            exact
            path="/projects"
            element={<Projects setSelected={setSelected} />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact setSelected={setSelected} />}
          />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
};

export default App;
