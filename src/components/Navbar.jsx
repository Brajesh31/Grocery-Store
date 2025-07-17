import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-200 text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">🌽 Grocery Store</Link>
        <ul className="flex space-x-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
          <li><Link to="/cart" className="hover:text-gray-500">Cart</Link></li>
          <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
