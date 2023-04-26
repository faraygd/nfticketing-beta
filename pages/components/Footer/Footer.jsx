import React from "react";
import Logo from "../../../public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="bg-orange-500 mt-72 ">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="flex flex-col-6 gap-12 text-white">
          <div className="flex gap-12">
            <div className="test">
              <Image src={Logo} />
              <p className="text-sm w-6/12 py-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea{" "}
              </p>
              <div className="flex space-x-4 py-12">
                <Link href="/"><BsTwitter size={30} /></Link>
                <Link href="/"><BsDiscord size={30} /></Link>
                <Link href="/"><BsInstagram size={30} /></Link>
              </div>
            </div>
            <div>
              <h2 className="font-bold">Resource</h2>
              <ul>
                <li>Docs</li>
                <li>Features</li>
                <li>FAQ</li>
                <li>Press Kit</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Company</h2>
              <ul>
                <li>Help Center</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Apply</h2>
              <ul>
                <li>Apply for NFT Ticketing</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Links</h2>
              <ul className="w-full">
                <li>Privacy Policy</li>
                <li>Term of Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
