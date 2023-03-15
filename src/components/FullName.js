import { motion } from "framer-motion";
import Stylesheet from "reactjs-stylesheet";
import computer from "../data/images/computer.png";
import phone from "../data/images/phone.png";
import tablet from "../data/images/tablet.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import CrossfadeImage from "react-crossfade-image";
import { useState, useEffect, useRef } from "react";

const FullName = () => {
  const xtraSmallSize = useMediaQuery("(min-width:600px)");
  const [imageIndex, setImageIndex] = useState(0);
  const images = [computer, phone, tablet];
  const counter = useRef(0);

  useEffect(() => {
    setInterval(() => {
      if (counter.current === images.length - 1) {
        counter.current = 0;
        setImageIndex(0);
      } else {
        counter.current += 1;
        setImageIndex(counter.current);
      }
    }, 4000);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <center>
        <div
          style={{
            maxWidth: 400,
            marginTop: "40px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <CrossfadeImage
            style={{
              width: "100%",
            }}
            src={images[imageIndex]}
            duration={500}
            timingFunction={"ease-out"}
          />
        </div>
      </center>
      <motion.div
        initial={{ opacity: 1, y: -200, scale: 0, rotateX: 0 }}
        animate={{ scale: 1, y: 0, rotateX: 1080 }}
        transition={{ duration: 1 }}
        style={styles.text}
      >
        <p
          className="full-name"
          style={{
            fontFamily: "Press Start 2P",
            fontSize: xtraSmallSize ? "60px" : "40px",
          }}
        >
          Ezer Angeles
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ marginBottom: "50px" }}
      >
        <p
          style={{
            fontSize: xtraSmallSize ? "20px" : "15px",
            color: "white",
            textAlign: "center",
          }}
        >
          One computer, endless possibilities.
        </p>
      </motion.div>
    </>
  );
};

const styles = Stylesheet.create({
  text: {
    color: "white",
    textAlign: "center",
    height: "15vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FullName;
