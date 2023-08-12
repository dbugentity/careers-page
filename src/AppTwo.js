import React, {useEffect, useRef} from 'react';
import './AppTwo.css';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
// import Banner from './Banner';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useScroll, useTransform } from 'framer-motion';

function AppTwo() {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };

  useEffect(()=> {
    AOS.init({duration: 2500});
  }, []);
  
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div data-scroll-section>
           <main data-scroll-container ref={ref} className='container'>

        <section className="intro"
      data-scroll //This attribute makes this section an independent scrollable container
        data-scroll-speed="4"
          data-scroll-section
    >
          <h1 className="c-header_title is-inview" data-scroll>
            <span className="is-inview" data-scroll data-scroll-speed="3" data-aos="fade-dowm-flip">
              Kinship.
              </span>
              <span className="c-header_title_line u-white">
                V4.X
                </span>
          </h1>
         

        </section>
        <section className="contents" data-scroll-section>
          <h1>Lorem Ipsum</h1>
        </section>
        <section className="footer" data-scroll-section>
          <h1>Footer</h1>
        </section>
      </main>
      </div>
   
    </LocomotiveScrollProvider>
  );
}
export default AppTwo;