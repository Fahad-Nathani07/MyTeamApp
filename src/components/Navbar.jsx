import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">MyTeamApp</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-user" className="hover:underline">
            Add User
          </Link>
        </li>
        <li>
          <Link to="/view-users" className="hover:underline">
            View          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
