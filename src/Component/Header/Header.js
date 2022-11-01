import React from 'react';
import logo from '../../Images/sports.webp'
import './Header.css'
const Header = () => {
    return (
        <div>
          <nav className='header'>
            <img src={logo} alt=''></img>
            <h1>Ultra-Sports-Club</h1>
          </nav>
        </div>
    );
};

export default Header;