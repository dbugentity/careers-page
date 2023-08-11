import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const HeaderKram = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.3,
      }}
      className='header'>
      <div className='header-inner'>
        
      </div>
    </motion.div>
  );
};

export default HeaderKram;
