import React from "react";
import Stylesheet from "reactjs-stylesheet";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        Site developed by Ezer Angeles. © Ezer Angeles 2022. All rights
        reserved. <br />
        Created with{" "}
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
        >
          ReactJS
        </a>
        . Hosted on{" "}
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://github.com/eangele1/ezerangeles.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

const styles = Stylesheet.create({
  footer: {
    color: "white",
    textAlign: "center",
    padding: 20,
  },
});

export default Footer;
