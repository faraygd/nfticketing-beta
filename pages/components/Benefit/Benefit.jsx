import React from "react";
import Feature from "./Feature";

const Benefit = () => {
  return (
    <section className="section-benefit my-36">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <h1 className="font-extrabold max-w-2xl text-4xl tracking-tight leading-none xl:text-6xl md:text-5xl dark:text-white">
          Benefit
        </h1>
      </div>
      {/* Feature */}
      <div className="flex justify-around">
        <Feature
          title="Chain Agnostic"
          img="https://www.seedling.cm/assets/icon-chain-agnostic.png"
          description="Invest in projects across the most known blockchains such as Ethereum, Avalanche, Binance SmartChain, Solana, Polygon, Cherry Network and more."
        />
        <Feature
          title="Chain Agnostic"
          img="https://www.seedling.cm/assets/icon-secure-transactions.png"
          description="Funds are secured by Seedling's state-of-the-art security protocols and best practises. Money is released from the decentralized escrow only when a sale is complete."
        />
        <Feature
          title="Chain Agnostic"
          img="https://www.seedling.cm/assets/icon-compliant-investment.png"
          description="Projects proposed on Seedling undergo rigorous legal tests to provide a transparent and legal investment experience to both founders and users."
        />
      </div>
    </section>
  );
};

export default Benefit;
