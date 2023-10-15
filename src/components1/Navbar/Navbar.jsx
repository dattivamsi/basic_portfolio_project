import React from "react";
import img1 from "../images/facebook.png";
import img2 from "../images/instagram.png";
import img3 from "../images/youtube.png";
import img4 from "../images/dribbble.png";
import { motion } from "framer-motion";
import "./Navbar.css";
import SideBar from "../sidebar/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
        <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          LamDev
        </motion.span>
        <div className="social">
          <a>
            <img src={img1} alt="" />
          </a>
          <a>
            <img src={img2} alt="" />
          </a>
          <a>
            <img src={img3} alt="" />
          </a>
          <a>
            <img src={img4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
