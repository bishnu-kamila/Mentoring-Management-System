import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-xl font-bold">Mentoring Management System</h1>

        {/* Login Button */}
        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
