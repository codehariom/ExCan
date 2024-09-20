import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="bg-slate-200 w-full py-3  sm:flex px-5 sm:px-20 justify-between items-center relative">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="/logo.png" alt="ExCan" className="w-[135px]" />
          </Link>
        </div>

        <div>
          <RxHamburgerMenu
            onClick={menuToggle}
            className="sm:hidden text-2xl"
          />
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "hidden" : "flex flex-col"
        } sm:flex-row mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:items-center sm:space-x-4 px-1 sm:px-0`}
      >
        <Link
          to="/interview/new"
          className="hover:text-mainGreen transition duration-[.2] font-bold"
        >
          Start
        </Link>
        <Link
          to="/dashboard"
          className="hover:text-mainGreen transition duration-[.2] font-bold"
        >
          Dashboard
        </Link>
        <Link
          to="/account/log-in"
          className="hover:text-mainGreen transition duration-[.2] font-bold"
        >
          Account
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
