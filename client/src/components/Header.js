import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><h1>Torrent App</h1></Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Create Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
