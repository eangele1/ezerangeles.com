import React from "react";
import Stylesheet from "reactjs-stylesheet";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        Site developed by Ezer Angeles. © Ezer Angeles 2022. All rights
        reserved.
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
