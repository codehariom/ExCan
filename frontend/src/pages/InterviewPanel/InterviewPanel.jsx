import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AudioVisualizer from "../../components/AudioVisualizer/AudioVisualizer";

const InterviewPanel = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMalpractice, setIsMalpractice] = useState(!false);
  const [warnings, setWarnings] = useState(0);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const videoRef = useRef(null);
  const { videoStream, audioStream } = useSelector((state) => state.media);
  const dispatch = useDispatch();

  console.log(videoStream, audioStream);

  const questions = [
    { question: "Tell me about yourself." },
    { question: "Why do you want to work here?" },
    { question: "What are your strengths and weaknesses?" },
  ];

  // Time

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setTotalTimeTaken((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [totalTimeTaken]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Quiz handler

  const handlePrev = () => {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1)
      setQuestionIndex(questionIndex + 1);
  };

  // Media handlers

  useEffect(() => {
    videoRef.current.srcObject = videoStream;
    videoRef.current.play();
  }, []);

  // Interview end handler

  const handleEndInterview = () => {
    setIsModalOpen(false);
    setIsInterviewEnded(true);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-10 ">
      <div className="w-full max-w-6xl bg-white rounded-lg flex flex-col md:flex-row h-[90%]">
        {/* Question, Interview-End, Times section */}
        <div className="flex-1 rounded-l-lg relative">
          {/* Question number */}
          <h2 className="text-sm font-bold mb-4 text-gray-800">
            Question {questionIndex + 1}
          </h2>

          {/* Question */}
          <p className="text-base bg-white p-4 rounded-lg border">
            {questions[questionIndex].question}
          </p>

          {/* Next button */}
          <div className="mt-6 flex justify-between mb-5">
            <button
              onClick={handleNext}
              disabled={questionIndex === questions.length - 1}
              className="px-5 py-2 bg-mainGreen text-white rounded disabled:bg-gray-300 "
            >
              Next
            </button>
          </div>

          {/* Speech recognition  */}

          <h2 className="text-sm font-bold mb-2 text-gray-800">Your answer</h2>
          <div className="max-h-32 overflow-y-auto mt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            atque accusantium consequatur et illo totam harum eius est, cumque
            voluptatibus odio omnis similique quos consectetur vero sunt ...
          </div>

          {/* Timer Section and Interview end section */}
          <div className="max-w-6xl mb-4 absolute bottom-0 w-fit">
            <div className="text-[10px] font-semibold text-gray-800 mb-2 w-full">
              Total time taken: {formatTime(totalTimeTaken)}
            </div>

            <button
              onClick={openModal}
              className="px-4 block py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              End Interview
            </button>
          </div>
        </div>

        {/* Recording Section */}
        <div className="flex-1 flex flex-col gap-3 rounded-r-lg pl-5 ">
          {/* Video procession */}
          <div className="flex-2 aspect-video">
            <h3 className="text-sm font-semibold text-gray-800 mb-5">
              Video processing
            </h3>
            <div className="w-full h-60  rounded-lg flex items-center justify-center">
              <video
                ref={videoRef}
                className={`h-full rounded-lg border-8 ${
                  isMalpractice ? "border-red-500" : "border-green-500"
                }`}
              ></video>
            </div>
          </div>

          {/* Audio */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800 mb-6">
              Audio processing
            </h3>

            <div className="w-full h-10 bg-yellow-100 ">
              <AudioVisualizer stream={audioStream} />
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Are you sure you want to end the interview?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEndInterview}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                End Interview
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default InterviewPanel;
