import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="max-w-[2520px] flex justify-between items-center p-6 bg-black w-10/12 lg:mx-auto md:justify-between sm:justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl text-white">
            {/* Logo */}
            <Link href="/">
              Cherry <span className="font-bold text-white">Labs</span>
            </Link>
          </h1>
        </div>
        {/* Menu */}
        <div>
          <ul className="hidden lg:flex gap-6 mr-6 ">
            <li className="text-gray-400 cursor-pointer hover:text-white">
              Home
            </li>
            <li className="text-gray-400 cursor-pointer hover:text-white">
              Benefit
            </li>
            <li className="text-gray-400 cursor-pointer hover:text-white">
              About
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {/* Menu */}
        <div className="hidden md:flex text-white lg:hidden sm:flex ml-30">
          <AiOutlineMenu onClick={() => setNav(!nav)} size={18} />
        </div>
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            className="absolute right-4 top-4 cursor-pointer"
            size={18}
          />
          {/* Logo Side Drawer */}
          <h2 className="text-xl p-4 text-center flex">
            Cherry <span className="font-bold">Labs</span>
          </h2>
          <nav>
            <ul className="flex flex-col text-center p-12 gap-y-12 ">
              <li className="text-gray-800 cursor-pointer hover:text-semibold">
                Home
              </li>
              <li className="text-gray-800 cursor-pointer hover:text-semibold">
                Benefit
              </li>
              <li className="text-gray-800 cursor-pointer hover:text-semibold">
                About
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
