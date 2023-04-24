"use client";

import Image from "next/image";

const Feature = ({ img, description, title }) => {
  return (
    <div className="w-[200px] items-center justify-center">
      <Image
        src={img}
        width={100}
        className="items-center justify-center m-4 ml-12"
        height={100}
      />
            <h2 className="text-white text-center p-4 font-semibold">{title}</h2>
      <p className="text-white text-center">{description}</p>
    </div>
  );
};

export default Feature;
