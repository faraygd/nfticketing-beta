import React from "react";
import MintingBox from "./MintingBox";
import ProfileImage from "./ProfileImage";
const Cover = (title, description) => {
  return (
    <section>
      <div className="grid  lg:bg-red-100 w-full h-[300px]">
        <img
          className="max-h-[350px] w-screen"
          src="https://images.unsplash.com/photo-1680120603076-c086ec523217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cover-image"
        ></img>
      </div>
      {/* Profile */}
      <div class="hidden lg:flex m-12 justify-between sm:flex flex-co">
        <div className="l">
          <ProfileImage />
          <MintingBox />
        </div>
      </div>
    </section>
  );
};

export default Cover;
