import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

import logo from "../Assets/Images/logo.png"

function Header() {
  return (
    <header className="bg-light py-2 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center  ">
        <img src={logo} alt="" />
        <nav>
          <ul className="list-unstyled d-flex mb-0">
            <li className="mx-3"><Link to="#" className="text-dark text-decoration-none">Home</Link></li>
            <li className="mx-3"><Link to="/shop" className="text-dark text-decoration-none">Shop</Link></li>
            <li className="mx-3"><Link to="/products" className="text-dark text-decoration-none">Products</Link></li>
            <li className="mx-3"><Link to="/categories" className="text-dark text-decoration-none">Categories</Link></li>
            <li className="mx-3"><Link to="#" className="text-dark text-decoration-none">Pages</Link></li>
            <li className="mx-3"><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
          </ul>
        </nav>
        <div className="d-flex align-items-center">
          <input type="text" className="form-control" placeholder="Search for Products..." />
          <IoMdSearch className="ms-2" size={24} />
        </div>
      </div>
    </header>
  );
}

export default Header;
