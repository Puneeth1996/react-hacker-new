import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const newStyle = {
    color: 'white',
  };
  return (
    <nav>
      <Link style={newStyle} to='/'><h3>Logo</h3></Link>
      <ul className='nav-links'>
        <Link style={newStyle} to='/about'><li>About</li></Link>
        <Link style={newStyle} to='/'><li>Welcome</li></Link>
        <Link style={newStyle} to='/login'><li>Login</li></Link>
      </ul> 
    </nav>
  );
}

export default Nav;
