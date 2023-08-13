// // @ts-nocheck


// /// 1st HEADER



// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { useRef } from "react";
// import React from "react";
// import "./App.css";
// import img1 from './assets/old/young-girl-riding-bicycle-pet-dog-basket-21313806.jpg.webp'
// import 


// function App() {

//   const ref = useRef(null);

//   const options = {
//     smooth: true,
//   } 
//   return (
//      <LocomotiveScrollProvider options={options} containerRef={ref}>
//       <main data-scroll-container ref={ref}>


//         <section style={{background: ""}} className="intro"

      
//       data-scroll 
//       //**
//       /**
//        * 3rd part of the page here with sone floating content/elements after 1. locomotive header/text slide in first,
//        *  2. parallax background slide up, 3. conventional design with snageed up text animations
//        * 4. animated timeline
//        */

//       ////////////////
//         data-scroll-speed="9"
//           data-scroll-section>

  
//         </section >

//         {/* // HEADER 2/1ST SCREEN FOR THE TIMRLINR */}
//         <section className="contents" data-scroll-section>
//           <h1 data-scroll
//             data-scroll-direction="vertical"
//             data-scroll-speed="2"></h1>

//           <h1  data-scroll
//             data-scroll-direction="vertical"
//             data-scroll-speed="9" >And my dog</h1>
            
//         </section>
//         <section className="footer" data-scroll-section>
//           <h1>Let's end the application with this Footer</h1>
//         </section>
//       </main>
//     </LocomotiveScrollProvider>
//   );
// }





// export default App;



import React from 'react'
import Timeline from './components/Timeline/Timeline'

const App = () => {
  return (
    <div>
      <Timeline />
    </div>
  )
}

export default App