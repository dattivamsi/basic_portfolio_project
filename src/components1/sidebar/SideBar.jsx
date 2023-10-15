import React, { useState } from "react";
import ToggleButtons from "./togglebuttons/ToggleButtons";
import Links from "./links/Links";
import { motion } from "framer-motion";
import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 40px 30px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <ToggleButtons setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
