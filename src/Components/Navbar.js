import Image from '../Images/vincent.jpg';
import React from 'react';

const Navbar = () => {

  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center justify-between">
        <img className="h-12 w-12 rounded-full" src={Image} alt=""></img>
        <div className="ml-10 flex items-baseline space-x-4">
              <a href="/Intro" className="text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium">Introduction</a>
              <a href="/Education" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Education</a>
              <a href="/Projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
        </div>
        <p className="text-white font-bold">Vincent Paul Dela Cruz</p>
      </div>
    </div>
  );
};

export default Navbar;