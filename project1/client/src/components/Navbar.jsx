import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/show">
          <li>Show Product</li>
        </Link>
        <Link to="/add">
          <li>Add Product</li>
        </Link>
      </nav>
    </div>
  );
}
