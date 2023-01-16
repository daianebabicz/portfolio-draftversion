import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Appen from "../../img/appen.png";
import RoundPegs from "../../img/roundpegs.png";
import Hilab from "../../img/hilab.png";
import Ghfly from "../../img/ghfly.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Appen} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={RoundPegs} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Hilab} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Ghfly} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle pinkCircle"></div>
      </div>
    </div>
  );
};

export default Works;
