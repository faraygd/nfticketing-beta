import React from "react";

const About = () => {
  return (
    <section className="mt-96" id="about">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex">
          <h1 className="text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Who Are We
          </h1>
          </div>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            scelerisque viverra mauris in. Vitae ultricies leo integer malesuada
            nunc. Congue eu consequat ac felis donec et odio pellentesque. Proin
            sagittis nisl rhoncus mattis rhoncus urna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
