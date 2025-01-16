import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

function Card({ title, subtitle, Icon }) {
  return (
    <div className="w-full max-w-[500px] shadow-lg flex flex-col rounded-md py-10 px-4">
      <div className="self-start">
        <Icon size={30} />
      </div>

      <div className="self-center w-fit flex flex-col px-4 py-5 space-y-5">
        <h1 className="text-center text-lg font-extrabold font-roboto text-gray-800">
          {title}
        </h1>

        <h2 className="text-center text-sm text-gray-600">{subtitle}</h2>
      </div>
    </div>
  );
}

export default Card;
