import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Card from "../../components/Card/Card";
import Button from "@mui/material/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <NavigationBar />

      <div className="px-5 sm:px-20 relative bg-image-with-overlay h-[80vh] py-32">
        <div className="space-y-8">
          <h1 className="text-center text-5xl font-extrabold font-roboto">
            Your Personalized AI Interview Guide
          </h1>

          <h2 className="text-center font-extrabold opacity-60 text-lg">
            Enhance your chances of getting hired using our AI interviewer
          </h2>

          <div className="flex justify-center space-x-4">
            <Button
              variant="outlined"
              endIcon={<FaLongArrowAltRight />}
              sx={{
                backgroundColor: "#5bc136",
                color: "#ffff",
                borderColor: "#5bc136",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Get started
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#5bc136",
                borderColor: "#5bc136",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Direction
            </Button>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-20 py-52 sm:py-24">
        <h1 className="text-center text-2xl font-extrabold font-roboto">
          How it works?
        </h1>

        <h2 className="text-center font-extrabold opacity-60 text-lg">
          Give a mock interview in just 3 steps
        </h2>

        <div className="flex flex-col md:flex-row py-20 space-y-5 sm:space-y-0 gap-x-5 items-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
