import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

import logo from "../Assets/Images/logo.png"

function Header({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center  ">
        <img src={logo} alt="" />
        <nav>
          <ul className="list-unstyled d-flex mb-0">
            <li className="mx-2"><Link to="#" className="text-dark text-decoration-none">Home</Link></li>
            <li className="mx-2"><Link to="/shop" className="text-dark text-decoration-none">Shop</Link></li>
            <li className="mx-2"><Link to="/products" className="text-dark text-decoration-none">Products</Link></li>
            <li className="mx-2"><Link to="/categories" className="text-dark text-decoration-none">Categories</Link></li>
            <li className="mx-2"><Link to="#" className="text-dark text-decoration-none">Pages</Link></li>
            <li className="mx-2"><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
          </ul>
        </nav>
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Products..."
            style={{
              paddingLeft: "40px",
            }}
            onChange={handleSearchChange}
          />
          <i
            className="bi bi-search"
            style={{
              position: "absolute",
              left: "208px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#aaa",
            }}
          ></i>
        </div>

      </div>
    </header>
  );
}

export default Header;
