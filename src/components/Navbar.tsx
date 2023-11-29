"use client";
// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-primary-300 p-2 sm:p-4">
      <div className="w-full  flex items-center">
        {/* LOGO */}
        <div className="w-16 sm:w-20 grid place-items-center px-2">
          <img src="/next.svg" className="" alt="" />
        </div>
        {/* SEARCH BAR */}
        <div
          className={` ${
            isSearchOpen ? "flex" : "hidden"
          } sm:flex mx-auto flex-grow justify-center gap-2`}
        >
          <div
            className={`relative ${
              isSearchOpen ? "w-11/12" : " w-3/4"
            } rounded-md`}
          >
            <input
              type="text"
              className={`h-6 sm:h-8 w-full rounded-md placeholder:px-1`}
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-3">
              <img
                src="/icons/search.svg"
                className="h-4 w-4 sm:h-6 sm:w-6"
                alt=""
              />
            </div>
          </div>

          {isSearchOpen && (
            <img
              src="/icons/close.svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              alt=""
              onClick={() => setIsSearchOpen(false)}
            />
          )}
        </div>

        {/* PROFILE */}
        <div className={`ml-auto ${!isSearchOpen && "px-2"}`}>
          {false ? (
            <div>
              <div>
                <button className="py-2 px-6 border-2 border-white rounded-lg">
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-1 ml-auto">
              {!isSearchOpen && (
                <>
                  <div className="sm:hidden">
                    <img
                      onClick={() => setIsSearchOpen(true)}
                      src="/icons/search.svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="/icons/profile.svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="/icons/cart.svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
