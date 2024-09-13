import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const LoginForm = () => {
  const [passVisibility, setPassVisibility] = useState(false);
  const iconStyles = {
    cursor: "pointer",
  };
  const toggleVisibility = () => setPassVisibility((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (inputData) => console.log(inputData);
  const { email: emailError, password: passwordError } = errors;

  return (
    <div className="w-full">
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
          sx={{}}
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
              <VisibilityIcon sx={iconStyles} onClick={toggleVisibility} />
            ) : (
              <VisibilityOffIcon sx={iconStyles} onClick={toggleVisibility} />
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
          Log in
        </Button>
      </div>

      <div className="w-full mb-8">
        <span className="text-center w-full block">
          Don't have an account{" "}
          <Link to="/account/sign-up" className="underline text-blue-600">
            Sign-up
          </Link>
        </span>
      </div>
    </div>
  );
};
