// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
// import './AppTwo.css';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
// import Banner from './Banner';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useScroll, useTransform } from 'framer-motion';
import dogs from "./assets/old/hachiko.jpg";
import { motion } from "framer-motion";
import "./sass/main.scss";
import Header from "./higher-level/HeaderTwo"
import Banner from "./higher-level/Banner"
import Loader from "./higher-level/Loader"
import HeaderTwo from './higher-level/HeaderTwo';


function New() {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  useEffect(()=> {
    AOS.init({
      duration: 2500,
    })
  }, []);
  
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      
      <div data-scroll-section>
           <main data-scroll-container ref={ref} className='container'>

        {/* <section className="intro-two"
      data-scroll //This attribute makes this section an independent scrollable container
        data-scroll-speed="4"
          data-scroll-section
    >
          <h1 className="c-header_title is-inview" data-aos="flip-down">
            <span className="is-inview" data-aos="flip-up"  style={{
                  transform: `translate3d(0, ${x}px, 0px)`, 
                }}>
              Kinship.
              </span>
              <span className="c-header_title_line u-white" data-aos="flip-up">
                V4.X
                </span>
          </h1>
        </section> */}

        <section className="contents" data-scroll-section>
          <h1>Lorem Ipsum</h1>
          <img src={dogs} alt="" style={{height: "50vh", width: "80vw"}} />
        </section>
      </main>
      </div>
   
    </LocomotiveScrollProvider>
  );
}
export default New;