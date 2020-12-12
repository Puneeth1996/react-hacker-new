import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const newStyle = {
    color: 'white'
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link style={newStyle} to='/about'><li>About</li></Link>
        <Link style={newStyle} to='/'><li>Welcome</li></Link>
      </ul> 
    </nav>
  );
}

export default Nav;
