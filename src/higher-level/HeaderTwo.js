import React from "react";
import { motion } from "framer-motion";

const HeaderTwo = () => {
  return (
    <div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>

          <li>
            <a href='/design'>Careers</a>
          </li>
          
      </div>
    </div>
  );
};

export default HeaderTwo;
