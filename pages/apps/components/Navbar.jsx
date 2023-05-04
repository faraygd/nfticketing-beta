"use client";

import React, { useState } from "react";
import { useActiveChain } from "@thirdweb-dev/react";
import Link from "next/link";
import Logo from "../../../public/images/Logo.svg";
import Image from "next/image";

const Navbar = ({ isSoldOut }) => {
  const chain = useActiveChain();
  return (
    <>
      <div className="max-w-[2520px] mx-auto flex justify-between items-center p-4 bg-black lg:w-auto md:w-auto sm:w-auto">
        <div className="flex items-center">
          <Link href="apps" className="ml-4 font-bold text-rose-500">
            <Image src={Logo} />
          </Link>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
