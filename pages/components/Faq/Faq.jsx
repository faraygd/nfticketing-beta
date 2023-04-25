import React from "react";
import FaqList from "./FaqList";

const Faq = () => {
  return (
    <section className="section-benefit my-36">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <h1 className="font-extrabold max-w-2xl text-4xl tracking-tight leading-none xl:text-6xl md:text-5xl dark:text-white">
        Frequently Asked Questions
        </h1>
        <FaqList/>
      </div>
    </section>

  );
};

export default Faq;
