import React from 'react';
import './Header.css'; // Make sure to import the CSS file


const Header = () => {
  return (
    <div className="header">
      <div className="search-bar-outer-div">
        <input type="text" placeholder="Find your role" />
      </div>
      <div className='inner-div'>Inner div</div>
    </div>
  );
};

export default Header;

