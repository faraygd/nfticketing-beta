import React from "react";
import MintingBox from "./MintingBox";
import ProfileImage from "./ProfileImage";
const Cover = (title, description) => {
  return (
    <section>
      <div className="grid max-w-screen- lg:bg-red-100 w-full h-[300px]">
        <img
          className="max-h-[350px] w-screen"
          src="https://images.unsplash.com/photo-1680120603076-c086ec523217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ></img>
      </div>
      {/* Profile */}
      <div class="m-12">
        <div className="flex justify-between lg:gap-8 flex-col xl:gap-0 lg:py-16 lg:grid-cols-12 sm:grid-cols-8">
          <ProfileImage />
          <MintingBox />
        </div>
      </div>
    </section>
  );
};

export default Cover;
