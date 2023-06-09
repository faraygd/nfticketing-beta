import React from "react";
import PartnerDetails from "./PartnerDetails";
const Partners = () => {
  return (
    <section className="mt-96 mb-[500px]" id="partner">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <h1 className="font-extrabold max-w-2xl text-4xl tracking-tight leading-none xl:text-6xl md:text-5xl dark:text-white">
          Partner
        </h1>
      </div>
      {/* Feature */}
      <div className="flex flex-row justify-evenly">
        <PartnerDetails img="https://www.seedling.cm/assets/icon-chain-agnostic.png" />
        <PartnerDetails img="https://www.seedling.cm/assets/icon-chain-agnostic.png" />
        <PartnerDetails img="https://www.seedling.cm/assets/icon-chain-agnostic.png" />
      </div>
    </section>
  );
};

export default Partners;
