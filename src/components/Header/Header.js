import React from 'react';
import './Header.css';

const Header = ({ title, onLogout }) => (
  <header className="Header">
    <h1>The Potato Head Project Requests</h1>
    <button>Logout</button>
  </header>
);

export default Header;
