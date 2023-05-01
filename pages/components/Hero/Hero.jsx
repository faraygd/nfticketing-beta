'use client'

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
const Hero = () => {
  return (
    <section>
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto my-12">
        <div className="mr-auto place-self-center">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl ml-4 xl:text-6xl dark:text-white"
            data-aos="fade-up"
          >
            Bring
            <br />
            Your Experience Ticketing
            <br /> with Us
          </h1>
          <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg ml-4 lg:text-xl dark:text-gray-400">
            Buy music tickets easily and quickly for you
            <br /> using cryptocurrency.
          </p>
          <Link
            href="apps"
            className="text-white border border-white p-4 font-bold md:ml-4 sm:ml-4 mt-6"
          >
            Launch Apps
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex md:flex w-[500px] ml-4 sm:flex ">
          <div className="border border-outline w-8/12">
            <img src="https://gateway.ipfscdn.io/ipfs/QmUmSPFBQiYfNKFMRLUySaEiT3ym7TR82r8fx8CDKHVBP8/4.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
