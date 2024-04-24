// import React from 'react'
import { motion } from "framer-motion";

const Portofolio = () => {
  const routeVariants = {
    initial: {
      x: "100vh",
    },
    final: {
      x: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      x: "50px",
    },
    final: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="bg-green-700 component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final">
        Portofolio
      </motion.h1>
    </motion.div>
  );
};

export default Portofolio;
