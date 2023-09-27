import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white pt-7 pb-4">
      <nav className="flex justify-between items-center container mx-auto">
        {location.pathname !== "/" ? (
          <a
            className="inline-block rounded-full border border-brown p-3 text-brown hover:bg-brown hover:text-white focus:outline-none focus:ring active:bg-brown"
            href="/"
          >
            <span className="sr-only"> Welcome </span>
            <svg
              className="h-5 w-5 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        ) : (
          <div style={{ width: "2rem" }}></div>  
        )}
        <div className="flex-grow flex justify-center items-center space-x-8">
          <ul className="text-brown font-pop text-sizeheader flex">
            <li className="p-4 hover:text-beige hover:scale-105 duration-150">
              <a href="/About">À PROPOS</a>
            </li>
            <li className="p-4 hover:text-beige hover:scale-105 duration-150">
              <a href="/Projects">PROJETS</a>
            </li>
            <li className="p-4 hover:text-beige hover:scale-105 duration-150">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
