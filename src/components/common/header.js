import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/courses" className="nav-link">Courses</NavLink>
      </li>
    </nav>
  )
}

export default Header;