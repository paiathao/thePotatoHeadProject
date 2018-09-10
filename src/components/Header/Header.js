import React from 'react';
import './Header.css';

const Header = ({ title, logout }) => (
  <header className="Header">
    <h1>The Potato Head Project Requests</h1>
    <button onClick={logout}>Logout</button>
  </header>
);

export default Header;
