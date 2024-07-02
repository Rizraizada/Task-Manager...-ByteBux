import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        ByteBux
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tasks">Tasks</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
