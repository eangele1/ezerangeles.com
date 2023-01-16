import { motion } from "framer-motion";
import Stylesheet from "reactjs-stylesheet";
import computer from "../data/images/computer.png";

const FullName = () => {
  return (
    <>
      <center>
        <img
          style={{
            maxWidth: 400,
            paddingTop: "40px",
          }}
          src={computer}
          alt="_Computer"
        />
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
            fontSize: "60px",
          }}
        >
          Ezer Angeles
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
