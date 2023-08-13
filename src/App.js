// @ts-nocheck
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import React from "react";
import "./App.css";
// import FirstPage from "./components/Timeline/first-page/FirstPage";
import img1 from './assets/old/okkkk.png';



function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  }
  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>

        <main data-scroll-container ref={ref}>
          <section className="intro"


            //** 



            /**
             * 3rd part of the page here with sone floating content/elements after 1. locomotive header/text slide in first,
             *  2. parallax background slide up, 3. conventional design with snageed up text animations
             * 4. animated timeline
             */

            ////////////////
            data-scroll-speed="9"
            data-scroll-section>

            <div className="wrapper-1">
              <div className="new-logo">
                <span className="re">RE</span>
                volution
              </div>
              <span className="volume"></span>
            </div>


            <div className="hachi"><img className="hach" src={img1} alt="" /></div>
            <div className="landing-page-interaction">
            </div>

            <div >
              <a class="button0" data-slide="1" >
              <input id="round" className="input" type="submit" value="START EXPERIENCE" />
            </a>
            </div>
   
            
          </section>
x
        </main>
      </LocomotiveScrollProvider>


    </>
  );
}

export default App;