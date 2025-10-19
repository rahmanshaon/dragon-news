import React, { use } from "react";
import { Link, NavLink } from "react-router";
import UserImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log("user trying to logout");
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("you logged out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-[10vw] font-bold text-primary">
        Username:{" "}
        <span className="text-secondary">{user && user.displayName}</span>
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src={`${user ? user.photoURL : UserImg}`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary text-base-100 px-10"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-primary text-base-100 px-10"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
