import React from 'react';
import './Header.css';

const Header = () => {
  return (
    // <div className="header">
    //   <div className="search-bar-outer-div">
    //     <input type="text" placeholder="Find your role" />
    //   </div>
    //   <div className='inner-div'></div>
    // </div>
    <div className="header">
  <div className="inner-div"></div>
  <div className="search-bar-outer-div">
    <input type="text" placeholder="Find your role" />
  </div>
</div>

  );
};

export default Header;

