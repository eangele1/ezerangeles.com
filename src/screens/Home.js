import React from "react";
import Stylesheet from "reactjs-stylesheet";

const Home = (props) => {
  return (
    <div style={styles.container}>
      <p
        style={{
          fontSize: "40px",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

const styles = Stylesheet.create({
  container: {
    flex: 1,
    color: "white",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
});

export default Home;
