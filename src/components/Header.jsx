import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const today = new Date();

  // Custom 1

  //   const formattedDate = today.toLocaleDateString("en-US", {
  //     weekday: "long", // Sunday
  //     year: "numeric", // 2025
  //     month: "long", // November
  //     day: "numeric", // 27
  //   });

  // Custom 2

  //   const options = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };

  //   const formatted = today.toLocaleDateString("en-US", options);
  //   const [weekday, ...restParts] = formatted.split(", ");
  //   const rest = restParts.join(", ");

  //   Using date-fns

  const formatted = format(today, "EEEE, MMMM dd, yyyy"); // e.g. Sunday, November 27, 2025
  const [weekday, ...restParts] = formatted.split(", ");
  const rest = restParts.join(", ");

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-[400px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      {/* <p className="font-semibold">{formattedDate}</p> */}
      {/* <p>{format(new Date(), "EEEE, MMMM d, yyyy")}</p> */}
      <p className="text-accent">
        <span className="font-semibold text-primary">{weekday}</span>
        {", "}
        <span>{rest}</span>
      </p>
    </div>
  );
};

export default Header;
