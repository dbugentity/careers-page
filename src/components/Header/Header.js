import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="inner-div">
        <h3 className='welcome'>Welcome</h3>
        <p className='welcomeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='welcomeTextTwo'>Interested? Learn more about our open roles below.</p>
      </div>
      <div className="search-bar-outer-div">
        <input type="text" placeholder="Find your role" />
      </div>
    </div>
  );
};

export default Header;

