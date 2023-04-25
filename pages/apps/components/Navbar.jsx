"use client";

import React, { useState } from "react";
import { useActiveChain } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import Link from "next/link";

const Navbar = () => {
  const chain = useActiveChain();
  const [close, setClose] = useState(false);
  return (
    <>
      {chain ? (
        <div className="bg-orange-500 text-white text-center text-sm">
          Connected to {chain.name}
        </div>
      ) : (
        <div className="bg-orange-500 text-white text-center text-sm">
          Connected to an unsupported network, please switch to Mumbai
        </div>
      )}

      <div className="max-w-[2520px] mx-auto flex justify-between items-center p-4 bg-black lg:w-auto md:w-auto sm:w-auto">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-2xl px-2 ml-2 text-white">
            {/* Logo */}
            <div className="flex flex-col">
              {/* <img src="/images/logo.png" alt="Logo"  width={100} className="bg-white"/> */}
              <Link href="apps" className="font-bold text-rose-500">
                Catlabs
                <p className="text-[10px] text-white">
                  Powered by <span className="font-bold"> Cherry Labs</span>
                </p>
              </Link>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
