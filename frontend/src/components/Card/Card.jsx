import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full max-w-[500px] shadow-lg flex flex-col rounded-md py-10 px-4">
      <div className="self-start">
        <FaExpandArrowsAlt className="text-2xl" />
      </div>

      <div className="self-center w-fit flex flex-col px-4 py-5 space-y-5">
        <h1 className="text-center text-lg font-extrabold font-roboto text-gray-800">
          Step-1: Mention about you
        </h1>

        <h2 className="text-center text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          corporis laborum, corrupti facere deleniti architecto? Ducimus,
          veritatis.
        </h2>
      </div>
    </div>
  );
}

export default Card;
