import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible:(i) => ( {
      opacity: 1,
      x: 100,
      //   transition: { type: "spring", stiffness: 200, damping: 100 },
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 2 }}
        // animate={{ opacity: 1, scale: 1 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // transition={{ duration: 2 }}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // drag
      ></motion.div>
      <button onClick={() => setOpen((val) => !val)}>Click Me!!</button> */}
      <motion.ul animate="visible" initial="hidden" variants={variants} >
        {items.map((each,i) => (
          <motion.li variants={variants} key={each} custom={i}>{each}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
