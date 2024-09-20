import React, { useReducer, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { FaPlus } from "react-icons/fa";
import TextField from "@mui/material/TextField";

const initialFormState = { jobRole: "", skills: "", experience: null };

function formReducer(state, action) {
  switch (action.type) {
    case "jobRole":
      return { ...state, jobRole: action.value };
    case "skills":
      return { ...state, skills: action.value };
    case "experience":
      return { ...state, experience: action.value };
  }
}

export default function NewInterview() {
  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);
  const [displayError, setDisplayError] = useState(false);

  function handleInput(type, value) {
    setDisplayError(false);
    dispatchForm({
      type,
      value,
    });
  }

  function handleForm() {
    if (
      formState.jobRole == "" ||
      formState.skills == "" ||
      formState.experience == null ||
      formState.experience == ""
    ) {
      setDisplayError(true);
      return;
    }
  }

  console.log(formState);

  return (
    <>
      <NavigationBar />
      <div className="px-5 sm:px-40 py-10">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Start a new mock interview</h1>
        </div>

        <div className="w-full flex flex-wrap gap-x-8 mb-10 border border-gray-200 rounded-md py-10 px-5">
          <div className="flex-grow">
            <div className="font-bold text-sm text-gray-600 mb-8">
              Enter your job role/position
            </div>

            <TextField
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              id="jobRole"
              label="Position/role"
              fullWidth
            />
          </div>
          <div className="flex-grow">
            <div className="font-bold text-sm text-gray-600 mb-8">
              Enter your skills, separated by commas
            </div>

            <TextField
              id="skills"
              label="Skills"
              fullWidth
              onChange={(e) => handleInput(e.target.id, e.target.value)}
            />
          </div>
          <div className="flex-grow">
            <div className="font-bold text-sm text-gray-600 mb-8">
              Enter your experience
            </div>

            <TextField
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              id="experience"
              label="Experience"
              type="number"
              inputProps={{ min: 0 }}
            />
          </div>

          <div className="w-full mt-5">
            {displayError && (
              <div className="font-bold text-xs text-red-600">
                All the above fields role/position, skills and experience are
                mandatory
              </div>
            )}
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xs font-bold mb-5 italic">
            The application requires your permission to access audio for
            processing your responses and providing feedback. Granting this
            permission is mandatory. Additionally, the application may request
            to enable video however, the video will not be recorded or
            processed, and granting video access is optional.
          </h3>

          <div
            className="border-2 border-green-600 border-dotted h-20 rounded-lg flex justify-center items-center cursor-pointer hover:bg-green-200 transition bg-green-100"
            onClick={() => handleForm()}
          >
            <span className="flex justify-center items-center gap-x-2 text-lg font-bold text-green-600">
              <FaPlus className="" /> Start new
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
