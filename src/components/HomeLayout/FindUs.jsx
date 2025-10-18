import React from "react";
import FBIcon from "../../assets/fb.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";

const FindUs = () => {
  return (
    <div className="mb-5">
      <h2 className="font-bold text-accent mb-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item bg-base-100 text-accent justify-start">
          {" "}
          <img src={FBIcon} alt="" /> Facebook
        </button>
        <button className="btn join-item bg-base-100 text-accent justify-start">
          {" "}
          <img src={TwitterIcon} alt="" /> Twitter
        </button>
        <button className="btn join-item bg-base-100 text-accent justify-start">
          {" "}
          <img src={InstagramIcon} alt="" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
