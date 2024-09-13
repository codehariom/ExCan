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
          <h1 className="text-gray-900 text-xl font-bold">Progress graph</h1>
        </div>
        <div className="max-w-96 h-52 mb-7">
          <Line data={data} />
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
