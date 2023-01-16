import React, { useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import { useLocation } from "react-router-dom";

export default function About(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/about") {
      props.setSelected("about");
    }
  }, [pathname, props]);

  return (
    <div style={styles.container}>
      <p>about</p>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    color: "white",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
});
