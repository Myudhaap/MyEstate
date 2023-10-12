import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-purple-200 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-purple-500">My</span>
            <span className="text-purple-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-purple-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-purple-600" />
        </form>
        <ul className="flex items-center">
          <Link to="/">
            <li className="hidden sm:inline duration-200 text-purple-700 hover:bg-purple-100 p-3 rounded-lg">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="transition-all text-purple-700 hover:bg-purple-100 p-3 rounded-lg">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="transition-all text-purple-700 hover:bg-purple-100 p-3 rounded-lg">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
