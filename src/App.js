// @ts-nocheck
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Brands from "./components/Brands/Brands";
import OpenPositions from "./components/OpenPositions/OpenPositions";
import Footer from "./components/Footer/Footer";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HorizontalScroll />
    
     <section style={{marginTop: "24rem", paddingBottom: "2em"}}>
      <Brands />
     </section>
      
      <OpenPositions />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
