// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Job Listing Portal</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/jobs">Job Listings</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  </nav>
);

export default Navbar;
