import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 py-12 flex items-center justify-between pr-20 bg-gray-900">
      <div className="logo items-center flex ml-20">
        <div className="grid grid-cols-2">
          <div className="bg-white w-20 h-20 rounded-full"></div>
          <div className="grid grid-rows-3 ">
            <h2 className="text-white">CatlabsNFT</h2>
            <h3 className="text-white">Powered by CatLabs</h3>
          </div>
        </div>
      </div>
      <nav className="mr-32">
        <ul className="text-white flex items-center space-x-6 font-bold text-md">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Benefit</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
