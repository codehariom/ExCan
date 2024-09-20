import Home from "../pages/Home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Account } from "../pages/Account/Account";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { InterviewDetails } from "../pages/InterviewDetails/InterviewDetails";
import NewInterview from "../pages/NewInterview/NewInterview";

function ClientSideRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account" element={<Account />}>
        <Route path="log-in" element={<LoginForm />}></Route>
        <Route path="sign-up" element={<SignUpForm />}></Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route
        path="/interview/:mockInterviewId"
        element={<InterviewDetails />}
      ></Route>
      <Route path="/interview/new" element={<NewInterview />}></Route>
    </Routes>
  );
}

export default ClientSideRoutes;
