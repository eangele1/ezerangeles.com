import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Stylesheet from "reactjs-stylesheet";
import FullName from "../components/FullName";
import React, { useState } from "react";

const Home = () => {
  const [text, changeText] = useState("Choose your mode.");

  return (
    <>
      <div style={styles.container}>
        <FullName />
        <NavBar changeText={changeText} />
        <div style={styles.homeContainer}>
          <p
            style={{
              fontSize: "40px",
            }}
          >
            {text}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  homeContainer: {
    flex: 1,
    color: "white",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
});

export default Home;
