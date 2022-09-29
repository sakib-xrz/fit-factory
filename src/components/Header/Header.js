import React from 'react';
import './Header.css'
import logo from './../../logo-transparent.png'

const Header = () => {
    return (
      <div className="shadow-lg rounded-b-md">
        <div className="navbar flex justify-center">
          <a href="/" className="text-center">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>
      </div>
    );
};

export default Header;