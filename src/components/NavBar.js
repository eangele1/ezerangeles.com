import React from "react";
import { Button } from "@mui/material";
import Stylesheet from "reactjs-stylesheet";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.barContainer}>
        <div style={styles.buttonContainer}>
          <Button
            onMouseOver={() => props.changeText("Displays Ezer's biography.")}
            onMouseOut={() => props.changeText("Choose your mode.")}
            sx={[
              styles.button,
              { backgroundColor: props.selected === "about" && "red" },
            ]}
            variant="contained"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Button>
          <Button
            onMouseOver={() =>
              props.changeText("Lists projects created/contributed.")
            }
            onMouseOut={() => props.changeText("Choose your mode.")}
            sx={[
              styles.button,
              { backgroundColor: props.selected === "projects" && "red" },
            ]}
            variant="contained"
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projects
          </Button>
          <Button
            onMouseOver={() => props.changeText("Opens a fillable form.")}
            onMouseOut={() => props.changeText("Choose your mode.")}
            sx={[
              styles.button,
              { backgroundColor: props.selected === "contact" && "red" },
            ]}
            variant="contained"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

const styles = Stylesheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  barContainer: {
    width: "800px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0px",
  },
  button: {
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "red",
    },
    fontSize: { xs: 15, sm: 20 },
  },
});

export default NavBar;
