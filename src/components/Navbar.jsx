import React from "react";
import { NavLink } from "react-router";
import UserImg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[10vw]"></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={UserImg} alt="" />
        <button className="btn btn-primary text-base-100 px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
