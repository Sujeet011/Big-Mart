import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">BIG Mart</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          Products
          <div className="mega-menu">
            <div className="mega-menu-column">
              <h4>Category 1</h4>
              <ul>
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
              </ul>
            </div>
           
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="navbar-item">
          <Link to="/memo">Memo Example</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
