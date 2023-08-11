import React, {useEffect} from 'react';
import './Header.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useScroll, useTransform } from "framer-motion";


const Header = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);
  useEffect(()=> {
    AOS.init({duration: 2500});
  }, [])
  return (
    <>
    <div className="header" data-aos="fade-down">
      <div className="inner-div" data-aos="fade-up">
        <h3 className='welcome' >Welcome</h3>
        <p className='welcomeText' data-aos="zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='welcomeTextTwo' data-aos="zoom-in">Interested? Learn more about our open roles below.</p>
      </div>
      <div className="search-bar-outer-div">
        <input type="text" placeholder="Find your role" className='input' />
      </div>
    </div>
    </>
  );
};

export default Header;

