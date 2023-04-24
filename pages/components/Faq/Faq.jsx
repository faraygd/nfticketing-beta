import React from "react";
import FaqList from "./FaqList";

const Faq = () => {
  return (
    <div className="md:py-12 lg:px-20 md:px-6 py-9 px-4 ml-4">
      <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
        Frequently Asked Questions
      </h2>
      <FaqList/>
    </div>
  );
};

export default Faq;
