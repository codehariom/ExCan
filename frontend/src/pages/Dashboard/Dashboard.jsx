import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ResultCard } from "../../components/ResultCard/ResultCard";
import { ResultCardSkeleton } from "../../components/ResultCard/ResultCardSkeleton";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const labels = Array.from({ length: 100 }, (val, ind) => ind + 1);

// Chart data

const data = {
  labels: labels,
  datasets: [
    {
      label: "Progress",
      backgroundColor: "#5bc136",
      borderColor: "#5bc136",
      borderWidth: 1,
      pointRadius: 1.5,
      data: [1, 2, 3, 6, 1, 2, 3, 4, 5, 4, 5, 6, 1, 2, 3, 4],
    },
  ],
};

export const Dashboard = () => {
  const isLoading = false;

  return (
    <>
      <NavigationBar />
      <div className="px-5 sm:px-20 py-10">
        {/* Progress graph */}

        <div className="mb-7">
          <h1 className="text-gray-900 text-xl font-bold">Your progress</h1>
        </div>

        <div className="flex gap-x-5 flex-col lg:flex-row gap-y-10 mb-20">
          <div className="w-full space-y-3 flex gap-x-2 justify-center lg:justify-start items-center">
            {/* Profile picture */}

            <div className="w-32 h-32 bg-[#5bc136] rounded-full mt-5 overflow-hidden shrink-0">
              <div className="w-32 h-32 bg-blue-900 rounded-full mt-1 ml-1 overflow-hidden border-2 border-[#ffffff]">
                <img src="/mine.jpg" alt="" />
              </div>
            </div>

            <div className="">
              <p className="font-bold -ml-4">
                You've attended a total of <span className="text-lg">5</span>{" "}
                interviews.
              </p>
              <p className="font-bold -ml-2">
                You've been asked <span className="text-lg">5</span> questions
                so far.
              </p>
              <p className="font-bold -ml-1">
                You've nailed <span className="text-lg">100</span> questions
                correctly.
              </p>
              <p className="font-bold -ml-2">
                There were <span className="text-lg">50</span> unanswered
                questions.
              </p>
              <p className="font-bold -ml-4">
                You've got <span className="text-lg">40</span> questions wrong,
                but that's part of the learning process.
              </p>
            </div>
          </div>

          <div className="h-96 lg:h-52 flex justify-center">
            <Line data={data} />
          </div>
        </div>

        <div className="mb-7">
          <h1 className="text-gray-900 text-xl font-bold">
            Previously taken mocks
          </h1>
        </div>

        <div className="flex gap-5 content-center flex-wrap">
          {!isLoading ? (
            <>
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
              <ResultCard
                title={"Backend developer"}
                exp={3}
                date={"10/9/2024"}
              />
            </>
          ) : (
            <>
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
            </>
          )}
        </div>
      </div>
    </>
  );
};
