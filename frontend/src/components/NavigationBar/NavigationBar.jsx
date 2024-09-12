import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="bg-slate-200 w-full py-3  sm:flex px-5 sm:px-20 justify-between items-center relative">
      <div className="flex justify-between items-center">
        <div>
          <img src="/logo.png" alt="ExCan" className="w-[135px]" />
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
          isMenuOpen ? "hidden" : "block"
        } sm:flex mt-4 sm:mt-0 space-y-2 sm:space-y-0 items-center sm:space-x-4 px-1 sm:px-0`}
      >
        <div>Links</div>
        <div>Account</div>
      </div>
    </div>
  );
};

export default NavigationBar;
