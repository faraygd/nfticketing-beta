import React from "react";
import Logo from "../../../public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import BackToTop from "../BackToTop";
const Footer = () => {
  return (
    <section className="bg-orange-500">
      <div className="flex max-w-screen-xl px-4 py-8 justify-center">
          <div className="flex gap-12 text-white">
            <div>
              <Image src={Logo} className="w-24 sm:w-48"/>
              <p className="text-sm w-6/12 py-4 sm:hidden">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea{" "}
              </p>
              <div className="w-12 flex space-x-4 py-12 sm:w-12">
                <Link href="/"><BsTwitter  /></Link>
                <Link href="/"><BsDiscord  /></Link>
                <Link href="/"><BsInstagram /></Link>
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

    </section>
  );
};

export default Footer;
