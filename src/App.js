import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Brands from './components/Brands/Brands';

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
