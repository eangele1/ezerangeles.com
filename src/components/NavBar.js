import React from "react";
import { Button } from "@mui/material";
import Stylesheet from "reactjs-stylesheet";

const NavBar = (props) => {
  return (
    <div style={styles.container}>
      <Button
        onMouseOver={() => props.changeText("Displays Ezer's biography.")}
        onMouseOut={() => props.changeText("Choose your mode.")}
        size="large"
        sx={styles.button}
        variant="contained"
      >
        About
      </Button>
      <Button
        onMouseOver={() =>
          props.changeText("Lists all projects created/contributed.")
        }
        onMouseOut={() => props.changeText("Choose your mode.")}
        size="large"
        sx={styles.button}
        variant="contained"
      >
        Projects
      </Button>
      <Button
        onMouseOver={() => props.changeText("Opens a fillable form.")}
        onMouseOut={() => props.changeText("Choose your mode.")}
        size="large"
        sx={styles.button}
        variant="contained"
      >
        Contact
      </Button>
    </div>
  );
};

const styles = Stylesheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
  },
  button: {
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "red",
    },
  },
});

export default NavBar;
