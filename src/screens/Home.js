import React from "react";
import Stylesheet from "reactjs-stylesheet";

const Home = (props) => {
  return (
    <div style={styles.container}>
      <p
        style={{
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

const styles = Stylesheet.create({
  container: {
    padding: "40px 0px",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
  },
});

export default Home;
