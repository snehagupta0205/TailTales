// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

export default function Header() {
  return (
    <header className="bg-slate-800 bg-opacity-90 text-white py-4 relative">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="TailTales Logo" className="h-10" />
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-3xl font-bold lg:text-5xl">TailTales</h1>
          <p className="text-xs lg:text-xs mt-1 text-slate-400">
            This application is powered by{" "}
            <a
              href="https://thedogapi.com"
              className="text-indigo-600 underline active:text-orange-400"
            >
              The Dog Api
            </a>
          </p>
        </div>
        <nav className="ml-auto">
          <Link to="/" className="px-3 hover:underline">Home</Link>
          <Link to="/about" className="px-3 hover:underline">About</Link>
          <Link to="/contact" className="px-3 hover:underline">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
