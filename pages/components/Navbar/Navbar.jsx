import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Logo from "../../../public/images/Logo.svg";
import Image from "next/image";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="w-full flex justify-between items-center p-6">
        <div className="flex items-center">
          <h1 className="text-2xl text-white">
            {/* Logo */}
            <Image src={Logo} />
          </h1>
        </div>
        {/* Menu */}
        <div>
          <ul className="hidden lg:flex gap-6 mr-24">
            <Link href="/">
              <li className="text-gray-400 cursor-pointer hover:text-white">
                Home
              </li>
            </Link>
            <Link href="#benefit">
              <li className="text-gray-400 cursor-pointer hover:text-white">
                Benefit
              </li>
            </Link>
            <Link href="#partner">
              <li className="text-gray-400 cursor-pointer hover:text-white">
                Partner
              </li>
            </Link>
            <Link href="#about">
              <li className="text-gray-400 cursor-pointer hover:text-white">
                About
              </li>
            </Link>
          </ul>
        </div>
        {/* Mobile Menu */}
        {/* Menu */}
        <div className="hidden sm:flex ml-30  md:flex text-white ml-30  lg:hidden">
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
            Ticketing <span className="font-bold">LabsNFT</span>
          </h2>
          <nav>
            <ul className="flex flex-col text-center p-12 gap-y-12 ">
              <Link href="/">
                <li className="text-gray-800 cursor-pointer hover:text-semibold">
                  Home
                </li>
              </Link>
              <Link href="#benefit">
                <li className="text-gray-800 cursor-pointer hover:text-semibold">
                  Benefit
                </li>
              </Link>
              <Link href="#partner">
                <li className="text-gray-800 cursor-pointer hover:text-semibold">
                  Partner
                </li>
              </Link>
              <Link href="#about">
                <li className="text-gray-800 cursor-pointer hover:text-semibold">
                  About
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
