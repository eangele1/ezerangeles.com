import React, { useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import { useLocation } from "react-router-dom";

export default function Projects(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/projects") {
      props.setSelected("projects");
    }
  }, [pathname, props]);

  return (
    <div style={styles.container}>
      <p>projects</p>
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
