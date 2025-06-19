import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">MyTeamApp</h1>
      <ul className="flex gap-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Add User</a></li>
        <li><a href="#" className="hover:underline">View</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
