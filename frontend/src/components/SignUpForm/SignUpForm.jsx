import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignUpForm = () => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [cnfPassVisibility, setCnfPassVisibility] = useState(false);
  const toggleVisibility = (callback) => callback((prev) => !prev);
  const iconStyles = {
    cursor: "pointer",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (inputData) => console.log(inputData);
  const {
    userName: userNameError,
    email: emailError,
    password: passwordError,
    conformPassword: conformPasswordError,
  } = errors;

  return (
    <div className="w-full">
      <div className="w-full mb-8">
        <div className="font-bold mb-3 text-sm ">Full name</div>
        <TextField
          {...register("userName", {
            required: "Full name field can not be empty",
            validate: {
              hasTwoWords: (value) =>
                value.trim().split(" ").length >= 2 ||
                "Please enter your full name",
            },
            maxLength: {
              value: 20,
              message: "Full name can not exceed more than 20 letters",
            },
            minLength: {
              value: 10,
              message: "Full name must be grater than 10 letters",
            },
          })}
          fullWidth
          id="userName"
          label="Full name"
          variant="outlined"
        />

        <div>
          <span className="text-red-700 font-bold text-xs">
            {userNameError && userNameError.message}
          </span>
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="font-bold mb-3 text-sm ">Email</div>
        <TextField
          {...register("email", {
            required: "Email field can not be empty",
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Please enter a valid email address",
            },
          })}
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
        />

        <div>
          <span className="text-red-700 font-bold text-xs">
            {emailError && emailError.message}
          </span>
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="font-bold mb-3 text-sm">Password</div>
        <TextField
          {...register("password", {
            required: {
              value: true,
              message: "Password field can not be empty",
            },
            minLength: {
              value: 8,
              message: "Password length must be grater than 8",
            },
            maxLength: {
              value: 15,
              message: "Password length can be at max 15",
            },
            pattern: {
              value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])/,
              message:
                "Password must contain uppercase, lowercase, special characters and numbers",
            },
          })}
          fullWidth
          type={passVisibility ? "text" : "password"}
          InputProps={{
            endAdornment: passVisibility ? (
              <VisibilityIcon
                sx={iconStyles}
                onClick={() => toggleVisibility(setPassVisibility)}
              />
            ) : (
              <VisibilityOffIcon
                sx={iconStyles}
                onClick={() => toggleVisibility(setPassVisibility)}
              />
            ),
          }}
          id="password"
          label="Password"
          variant="outlined"
        />

        <div>
          <span className="text-red-700 font-bold text-xs">
            {passwordError && passwordError.message}
          </span>
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="font-bold mb-3 text-sm ">Conform password</div>
        <TextField
          {...register("conformPassword", {
            required: {
              value: true,
              message: "Conform password can not be empty",
            },
            validate: {
              passAndCnfPassEquality: (cnfPass) =>
                cnfPass == watch("password") ||
                "Password and Conform password are not same",
            },
          })}
          type={cnfPassVisibility ? "text" : "password"}
          InputProps={{
            endAdornment: cnfPassVisibility ? (
              <VisibilityIcon
                sx={iconStyles}
                onClick={() => toggleVisibility(setCnfPassVisibility)}
              />
            ) : (
              <VisibilityOffIcon
                sx={iconStyles}
                onClick={() => toggleVisibility(setCnfPassVisibility)}
              />
            ),
          }}
          fullWidth
          id="conformPassword"
          label="Conform password"
          variant="outlined"
        />

        <div>
          <span className="text-red-700 font-bold text-xs">
            {conformPasswordError && conformPasswordError.message}
          </span>
        </div>
      </div>

      <div className="w-full mb-8">
        <Button
          onClick={handleSubmit(onSubmit)}
          sx={{
            width: "100%",
            backgroundColor: "#5bc136",
            color: "#ffff",
            borderColor: "#5bc136",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          Sign up
        </Button>
      </div>

      <div className="w-full mb-8">
        <span className="text-center w-full block">
          Already have an account{" "}
          <Link to="/account/log-in" className="underline text-blue-600">
            Log-in
          </Link>
        </span>
      </div>
    </div>
  );
};
