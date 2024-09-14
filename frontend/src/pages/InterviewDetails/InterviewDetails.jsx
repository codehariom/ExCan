import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { CustomAccordion } from "../../components/CustomAccordion/CustomAccordion";

export const InterviewDetails = () => {
  return (
    <>
      <NavigationBar />

      <div className="px-5 sm:px-20 py-10">
        <div className="mb-5">
          <h1 className="font-extrabold text-2xl">Here is your feedback</h1>
        </div>

        <div className="mb-1 ">
          <h1 className="font-bold text-lg text-[#5bc136]">
            Overall Interview Marks: 7/10
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-sm text-gray-600">
            Interview Questions, Correct Answers, Your Responses, and Feedback
            for Improvements
          </h1>
        </div>

        <div className="flex flex-col gap-y-8">
          <CustomAccordion
            question={"What are the main features of React?"}
            givenAnswer={
              "React is a popular JavaScript library developed by Facebook for building user interfaces. "
            }
            correctAnswer={
              "JSX: A syntax that looks like HTML but is written within JavaScript, making it easier to write components."
            }
            feedback={
              "Could explain JSX and Virtual DOM in more depth with practical examples to demonstrate better understanding"
            }
            marks={4}
          />
          <CustomAccordion
            question={"What are the main features of React?"}
            givenAnswer={
              "React is a popular JavaScript library developed by Facebook for building user interfaces. "
            }
            correctAnswer={
              "JSX: A syntax that looks like HTML but is written within JavaScript, making it easier to write components."
            }
            feedback={
              "Could explain JSX and Virtual DOM in more depth with practical examples to demonstrate better understanding."
            }
            marks={"6"}
          />
          <CustomAccordion
            question={"What are the main features of React?"}
            givenAnswer={
              "React is a popular JavaScript library developed by Facebook for building user interfaces. "
            }
            correctAnswer={
              "JSX: A syntax that looks like HTML but is written within JavaScript, making it easier to write components."
            }
            feedback={
              "Could explain JSX and Virtual DOM in more depth with practical examples to demonstrate better understanding"
            }
            marks={"6"}
          />
          <CustomAccordion
            question={"What are the main features of React?"}
            givenAnswer={
              "React is a popular JavaScript library developed by Facebook for building user interfaces. "
            }
            correctAnswer={
              "JSX: A syntax that looks like HTML but is written within JavaScript, making it easier to write components."
            }
            feedback={
              "Could explain JSX and Virtual DOM in more depth with practical examples to demonstrate better understanding"
            }
            marks={"6"}
          />
          <CustomAccordion
            question={"What are the main features of React?"}
            givenAnswer={
              "React is a popular JavaScript library developed by Facebook for building user interfaces. "
            }
            correctAnswer={
              "JSX: A syntax that looks like HTML but is written within JavaScript, making it easier to write components."
            }
            feedback={
              "Could explain JSX and Virtual DOM in more depth with practical examples to demonstrate better understanding"
            }
            marks={"6"}
          />
        </div>
      </div>
    </>
  );
};
