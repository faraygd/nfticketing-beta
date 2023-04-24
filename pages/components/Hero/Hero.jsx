import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="section-hero my-20">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl ml-4 xl:text-6xl dark:text-white">
            Bring
            <br />
            Your Experience with Us
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg ml-4 lg:text-xl dark:text-gray-400">
            Buy music tickets easily and quickly for you
            <br /> using cryptocurrency.
          </p>
          <Link href="apps" className="ml-4 text-white border border-white p-4 md:ml-4 my-4">
            Launch Apps
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="border border-outline w-8/12">
            <img src="https://gateway.ipfscdn.io/ipfs/QmUmSPFBQiYfNKFMRLUySaEiT3ym7TR82r8fx8CDKHVBP8/4.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
