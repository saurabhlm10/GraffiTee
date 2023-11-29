import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen grid place-items-center bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: "url('/images/Hero.png')" }}
    >
      {/* Overlay div with semi-transparent background */}
      <div className="absolute inset-0 bg-slate-500  bg-opacity-90"></div>
      {/* Content */}
      <div className="relative z-10">
        <button className="bg-primary-100 px-3 py-2 rounded-md text-white shadow-md shadow-slate-500">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
