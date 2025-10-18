import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-primary mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn w-full btn-outline btn-info hover:text-base-100">
          <FaGoogle size={20} />
          {/* <FcGoogle /> */}
          Login with Google
        </button>
        <button className="btn w-full btn-outline btn-primary hover:text-base-100">
          <FaGithub size={20} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
