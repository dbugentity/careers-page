import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Brands from "./components/Brands/Brands";
import OpenPositions from "./components/OpenPositions/OpenPositions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brands />
      <OpenPositions />
      <Footer />
    </div>
  );
}

export default App;
