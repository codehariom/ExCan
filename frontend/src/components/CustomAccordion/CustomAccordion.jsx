import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const getColor = (score) => {
  if (score <= 4) {
    return { textColor: "text-red-500", backgroundColor: "bg-red-100" };
  } else if (score > 4 && score <= 7) {
    return { textColor: "text-orange-500", backgroundColor: "bg-orange-100" };
  } else {
    return { textColor: "text-green-500", backgroundColor: "bg-green-100" };
  }
};

export const CustomAccordion = ({
  question,
  givenAnswer,
  correctAnswer,
  feedback,
  marks,
}) => {
  const { textColor, backgroundColor } = getColor(marks);

  return (
    <Accordion
      sx={{
        boxShadow: "4px 4px 101px -41px rgba(0,0,0,0.6)",
        border: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        sx={{
          fontWeight: "bolder",
          backgroundColor: "rgba(226, 232, 240, .5)",
        }}
      >
        {question}
      </AccordionSummary>
      <AccordionDetails>
        <div
          className={`w-full font-extrabold py-3 rounded border px-2 mb-2 ${textColor}`}
        >
          Marks: {marks}
        </div>

        <div
          className={`w-full font-extrabold py-3 rounded border px-2 mb-2 ${textColor} ${backgroundColor}`}
        >
          Your answer: {givenAnswer}
        </div>

        <div
          className={`w-full font-extrabold py-3 rounded border px-2 mb-2 bg-green-100 text-green-600`}
        >
          Suggested answer: {correctAnswer}
        </div>

        <div
          className={`w-full font-extrabold py-3 rounded border px-2 mb-2 bg-blue-100 text-blue-600`}
        >
          Feedback: {feedback}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
