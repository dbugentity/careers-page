import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <WelcomeSection /> */}
    </div>
  );
}

export default App;
