import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div
      className=" container relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white ">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">
          Wxplore Homes that fit your dreams
        </h2>
        <ul>
          <div className="space-x-6 mt-16">
            <a href="#Projects" className="border border-whte px-8 py-3">
              Project
            </a>
            <a
              href="#Contact"
              className="border border-whte px-8 py-3 bg-blue-500"
            >
              COnatct Us
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
