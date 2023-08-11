// @ts-nocheck
// // @ts-nocheck
// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
// import Brands from "./components/Brands/Brands";
// import OpenPositions from "./components/OpenPositions/OpenPositions";
// import Footer from "./components/Footer/Footer";
// import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Header />
//       <HorizontalScroll />
    
//      <section style={{marginTop: "24rem", paddingBottom: "2em"}}>
//       <Brands />
//      </section>
      
//       <OpenPositions />
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./sass/main.scss";

// Components
import HeaderKram from "./animations/HeaderKram";
import Banner from "./animations/Banner";
import Loader from "./animations/Loader";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <div type='crossfade'>
       <HeaderKram />
      <div>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
            <Header />
          </motion.div>
        ) : (
          <>

            
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/img/2.jpg`}
                  layoutId='main-image-1'
                  
                />
               
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
