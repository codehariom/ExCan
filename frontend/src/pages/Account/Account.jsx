import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export const Account = () => {
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      <div className="px-5 sm:px-20 flex justify-center">
        <div className="w-full max-w-[350px] py-10">
          <h1 className="text-center font-bold font-roboto mb-10 text-lg">
            {location.pathname == "/account/log-in"
              ? "Welcome back, Please log in to continue"
              : "Create an account and get better with AI powered interview assistant"}
          </h1>

          <Outlet />
        </div>
      </div>
    </>
  );
};
