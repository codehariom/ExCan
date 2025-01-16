import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const InterviewPanel = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInterviewEnded, setIsInterviewEnded] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const questions = [
    { question: "Tell me about yourself." },
    { question: "Why do you want to work here?" },
    { question: "What are your strengths and weaknesses?" },
  ];

  useEffect(() => {
    let timer;
    if (!isInterviewEnded) {
      timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isInterviewEnded]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handlePrev = () => {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1)
      setQuestionIndex(questionIndex + 1);
  };

  const handleStartVideoRecording = () => setIsVideoRecording(true);
  const handleStopVideoRecording = () => setIsVideoRecording(false);

  const handleEndInterview = () => {
    setIsModalOpen(false);
    setIsInterviewEnded(true);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isInterviewEnded) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Interview Ended</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-10 ">
      {/* Timer Section and Interview end section */}
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800 h-11"
        >
          End Interview
        </button>

        <div className="text-right text-xl font-semibold text-gray-800">
          Time Elapsed: {formatTime(timeElapsed)}
        </div>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-lg flex flex-col md:flex-row h-[90%]">
        {/* Question Section */}
        <div className="flex-1 p-6 rounded-l-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Question {questionIndex + 1}
          </h2>
          <p className="text-lg bg-white p-4 rounded-lg shadow-md">
            {questions[questionIndex].question}
          </p>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrev}
              disabled={questionIndex === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={questionIndex === questions.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>

        {/* Recording Section */}
        <div className="flex-1 flex flex-col gap-3 p-2 rounded-r-lg">
          {/* Video Recording */}
          <div className="flex-2 aspect-video">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Video Recording
            </h3>
            <div className="w-full h-60 bg-green-100 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">Video Placeholder</span>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleStartVideoRecording}
                disabled={isVideoRecording}
                className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
              >
                Start Video
              </button>
              <button
                onClick={handleStopVideoRecording}
                disabled={!isVideoRecording}
                className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
              >
                Stop Video
              </button>
            </div>
          </div>

          {/* Voice Recording */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Voice Recording
            </h3>
            <div className="w-full h-10 bg-yellow-100 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">Voice Placeholder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
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
      )}
    </div>
  );
};

export default InterviewPanel;
