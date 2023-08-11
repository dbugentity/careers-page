import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Brands from './components/Brands/Brands';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brands />
    </div>
  );
}

export default App;
