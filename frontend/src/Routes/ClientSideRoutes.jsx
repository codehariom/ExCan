import Home from "../pages/Home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Account } from "../pages/Home/Account";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";

function ClientSideRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account" element={<Account />}>
        <Route path="log-in" element={<LoginForm />}></Route>
        <Route path="sign-up" element={<SignUpForm />}></Route>
      </Route>
    </Routes>
  );
}

export default ClientSideRoutes;
