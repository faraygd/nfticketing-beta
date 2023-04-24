"use client";

import React, { useState } from "react";
import { useActiveChain, useSwitchChain } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import Link from "next/link";
const Navbar = () => {
  const switchChain = useSwitchChain();
  const chain = useActiveChain();
  const [close, setClose] = useState(false);
  return (
    <>
      <div
        className={
          close
            ? "Test"
            : "max-w-screen bg-orange-500 text-white text-center justify-around flex lg:w-auto md:w-auto sm:w-screen"
        }
      >
        {chain ? (
          <div className="flex gap-6 text-center items-center text-sm">
            Connected to {chain.name}
          </div>
        ) : (
          <div className="bg-orange-500 text-white text-center text-sm">
            Connected to an unsupported network, please switch to{" "}
            <button onClick={() => switchChain(Goerli.chainId)} className="bg-black">
              Switch to Mumbai
            </button>
          </div>
        )}
      </div>

      <div className="max-w-[2520px] mx-auto flex justify-between items-center p-4 bg-black lg:w-auto md:w-auto sm:w-auto">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-2xl px-2 ml-2 text-white">
            {/* Logo */}
            <div className="flex flex-col">
              {/* <img src="/images/logo.png" alt="Logo"  width={100} className="bg-white"/> */}
              <Link href="apps" className="font-bold text-rose-500">
                Catlabs
              </Link>
              <p className="text-[10px]">
                Powered by <span className="font-bold"> Cherry Labs</span>
              </p>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
