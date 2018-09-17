import React from 'react';
import './Header.css';
import Csv from '../Csv/Csv'

const Header = ({ title, logout }) => (
  <header className="Header">
    <img src="https://i.postimg.cc/NGDZVnWx/logoheader.png" height='60px' />
    <h1>
      The Potato Head Project
    </h1>
    <Csv/>
    <button className="logoutButton" onClick={logout}>Logout</button>
  </header>
);

export default Header;
