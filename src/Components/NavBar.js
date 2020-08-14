import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/product">Products</Link>

    </div>
  );
}

export default NavBar;
