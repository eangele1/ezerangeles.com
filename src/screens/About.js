import React, { useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import pfp from "../data/images/pfp.png";

export default function About(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/about") {
      props.setSelected("about");
    }
  }, [pathname, props]);

  return (
    <div style={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: 400, md: 800 },
        }}
      >
        <Avatar
          alt="Ezer Angeles"
          src={pfp}
          sx={{
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            mt: 4,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 15, sm: 30 },
            my: 4,
            textAlign: "justify",
            textJustify: "inter-word",
            padding: "0px 30px",
          }}
        >
          &emsp;I'm just a regular person with a huge mindset of creativity and
          ideas. I was born and raised in the Bay Area, and I'm currently
          residing in the Central Valley. I graduated from UC Merced with a
          Bachelor's in Computer Science and Engineering. I'm also a part-time
          musician and gamer! I wish to be in a position in which I can release
          my inner creativity to the world through various types of media while
          at the same time participate in technological advancements for the
          betterment of mankind.
        </Typography>
      </Box>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});
