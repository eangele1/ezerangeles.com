import React, { useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import { useLocation } from "react-router-dom";

import ContactForm from "../components/ContactForm";

export default function Contact(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contact") {
      props.setSelected("contact");
    }
  }, [pathname, props]);

  return (
    <div style={styles.container}>
      <ContactForm />
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
