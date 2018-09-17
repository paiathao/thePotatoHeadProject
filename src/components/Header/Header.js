import React from 'react';
import './Header.css';
import Csv from '../Csv/Csv'

const Header = ({ title, logout }) => (
  <header className="Header">
    <div>
      <img src="https://i.postimg.cc/NGDZVnWx/logoheader.png" height='60px' />
      <h1>The Potato Head Project</h1>
    </div>
    <div>
      <button><Csv /></button>
      <button onClick={logout}>Logout</button>
    </div>
  </header>
);

export default Header;
