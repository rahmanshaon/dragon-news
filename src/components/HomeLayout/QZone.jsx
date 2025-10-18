import React from "react";
import SwimmingImg from "../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import PlaygroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold text-accent mb-5">Q-Zone</h2>
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={SwimmingImg} alt="" />
        <img src={ClassImg} alt="" />
        <img src={PlaygroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
