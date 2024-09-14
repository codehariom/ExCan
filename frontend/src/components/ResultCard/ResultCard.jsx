import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ResultCard = ({ title, exp, date }) => {
  const navigate = useNavigate();
  const navigateToDetails = (id) => navigate(`/interview/${id}`);

  return (
    <div className="bg-slate-50 rounded w-full basis-[280px] flex-grow flex flex-col p-5 gap-y-1 border">
      <h1 className="text-[#5bc136] font-bold">{title}</h1>
      <h3 className="text-gray-600 text-xs">{exp} years of experience</h3>
      <h3 className="text-xs font-bold text-gray-500">Taken at - {date}</h3>

      <div className="space-x-2 mt-5">
        <Button
          sx={{
            backgroundColor: "#5bc136",
            color: "#ffff",
            borderColor: "#5bc136",
            paddingBottom: "10px",
            paddingTop: "10px",
            height: "30px",
          }}
        >
          Start
        </Button>
        <Button
          onClick={() => navigateToDetails("123")}
          sx={{
            color: "#5bc136",
            borderColor: "#5bc136",
            paddingTop: "10px",
            paddingBottom: "10px",
            height: "30px",
            border: "1px solid gray",
          }}
        >
          Details
        </Button>
      </div>
    </div>
  );
};
