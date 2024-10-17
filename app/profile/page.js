"use client";
import { useRouter } from "next/navigation";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import { useEffect } from "react";
import Calendar from "./components/Calendar";
import ScatterPlot from "./components/ScatterPlot";
import TopNav from "../components/TopNav";

export default function WorkerProfile() {
  const router = useRouter();
  const calData = [
    { date: "2024-10-01", value: 6 },
    { date: "2024-10-02", value: 2 },
    { date: "2024-10-03", value: 8 },
    { date: "2024-10-04", value: 5 },
    { date: "2024-10-05", value: 1 },
    { date: "2024-10-06", value: 5 },
    { date: "2024-10-07", value: 7 },
    { date: "2024-10-08", value: 8 },
    { date: "2024-10-09", value: 5 },
    { date: "2024-10-10", value: 7 },
    { date: "2024-10-11", value: 8 },
    { date: "2024-10-12", value: 4 },
    { date: "2024-10-13", value: 1 },
    { date: "2024-10-14", value: 6 },
    { date: "2024-10-15", value: 2 },
    { date: "2024-10-16", value: 5 },
    { date: "2024-10-17", value: 7 },
    { date: "2024-10-18", value: 4 },
    { date: "2024-10-19", value: 2 },
    { date: "2024-10-20", value: 2 },
    { date: "2024-10-21", value: 1 },
    { date: "2024-10-22", value: 4 },
    { date: "2024-10-23", value: 1 },
    { date: "2024-10-24", value: 3 },
    { date: "2024-10-25", value: 7 },
    { date: "2024-10-26", value: 2 },
    { date: "2024-10-27", value: 6 },
    { date: "2024-10-28", value: 6 },
    { date: "2024-10-29", value: 2 },
    { date: "2024-10-30", value: 7 },
    { date: "2024-10-31", value: 7 },
  ];

  const taskData = [
    { timeTaken: 6.26, qualityScore: 2.64 },
    { timeTaken: 3.37, qualityScore: 85.32 },
    { timeTaken: 4.72, qualityScore: 66.05 },
    { timeTaken: 4.03, qualityScore: 70.86 },
    { timeTaken: 1.94, qualityScore: 82.91 },
    { timeTaken: 7.49, qualityScore: 43.33 },
    { timeTaken: 7.78, qualityScore: 0.77 },
    { timeTaken: 2.56, qualityScore: 41.87 },
    { timeTaken: 4.42, qualityScore: 32.87 },
    { timeTaken: 6.48, qualityScore: 60.09 },
    { timeTaken: 5.67, qualityScore: 1.51 },
    { timeTaken: 5.38, qualityScore: 42.53 },
    { timeTaken: 2.81, qualityScore: 31.82 },
    { timeTaken: 1.96, qualityScore: 7.77 },
    { timeTaken: 7.63, qualityScore: 69.83 },
    { timeTaken: 1.22, qualityScore: 10.94 },
    { timeTaken: 1.43, qualityScore: 56.49 },
    { timeTaken: 2.75, qualityScore: 24.98 },
    { timeTaken: 3.98, qualityScore: 85.56 },
    { timeTaken: 3.68, qualityScore: 26.51 },
    { timeTaken: 4.4, qualityScore: 74.92 },
    { timeTaken: 4.88, qualityScore: 81.37 },
    { timeTaken: 2.3, qualityScore: 10.16 },
    { timeTaken: 4.92, qualityScore: 80.56 },
    { timeTaken: 2.4, qualityScore: 2.29 },
    { timeTaken: 2.55, qualityScore: 94.66 },
    { timeTaken: 6.46, qualityScore: 31.74 },
    { timeTaken: 3.98, qualityScore: 42.95 },
    { timeTaken: 2.49, qualityScore: 99.22 },
    { timeTaken: 3.61, qualityScore: 44.6 },
    { timeTaken: 3.42, qualityScore: 77.75 },
    { timeTaken: 1.89, qualityScore: 3.91 },
    { timeTaken: 2.87, qualityScore: 22.55 },
    { timeTaken: 7.85, qualityScore: 91.3 },
    { timeTaken: 5.01, qualityScore: 0.57 },
    { timeTaken: 7.7, qualityScore: 53.37 },
    { timeTaken: 7.9, qualityScore: 78.55 },
    { timeTaken: 5.87, qualityScore: 80.39 },
    { timeTaken: 1.93, qualityScore: 3.91 },
    { timeTaken: 4.73, qualityScore: 97.87 },
    { timeTaken: 3.27, qualityScore: 56.34 },
    { timeTaken: 5.46, qualityScore: 66.88 },
    { timeTaken: 5.99, qualityScore: 56.67 },
    { timeTaken: 4.72, qualityScore: 5.82 },
    { timeTaken: 5.37, qualityScore: 65.42 },
    { timeTaken: 1.96, qualityScore: 16.44 },
    { timeTaken: 2.47, qualityScore: 47.89 },
    { timeTaken: 2.33, qualityScore: 22.23 },
    { timeTaken: 5.47, qualityScore: 23.63 },
    { timeTaken: 1.85, qualityScore: 81.47 },
  ];

  return (
    <section>
      <TopNav />

      <div className="flex justify-center items-center min-h-screen bg-white p-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-2xl font-semibold mb-6 text-[#ff784d] text-center">
            Worker's Profile
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-[#ff784d] text-white p-4 rounded-lg flex flex-col items-center">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-black rounded-full"></div>
                <div>
                  <h2 className="text-lg font-bold">Robert</h2>
                  <p className="text-sm">Group 1</p>
                </div>
              </div>
              <div className="flex mt-3 px-10 w-full justify-between items-center">
                <p className="text-sm">Present</p>
                <button className=" p-1 bg-white text-[#ff784d] rounded-full">
                  📞
                </button>
              </div>
            </div>

            <div className="col-span-2 bg-[#ff784d] text-white p-4 rounded-lg flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold">Task Status</h3>
              <div className="relative mt-2 w-3/4 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-white"
                  style={{ width: "50%" }}
                ></div>
                <div
                  className="absolute left-1/2 top-0 h-full bg-gray-400"
                  style={{ width: "25%" }}
                ></div>
                <div
                  className="absolute left-3/4 top-0 h-full bg-gray-600"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm w-3/4">
                <p>50% Completed</p>
                <p>25% Incomplete</p>
                <p>25% Late</p>
              </div>
            </div>

            {/* Location and Time Section */}
            <div className="col-span-1 bg-[#ff784d] text-white p-4 rounded-lg text-center flex justify-center items-center flex-col">
              <h3 className="text-lg font-semibold">Current Location</h3>
              <p className="text-2xl font-bold mt-1">ZONE A</p>
              <p className="mt-1 text-sm">Time Spent: 3 hours</p>
            </div>

            {/* Tasks Section */}
            <div className="col-span-1 bg-[#ff784d] text-white p-4 rounded-lg text-center flex justify-center items-center flex-col">
              <h3 className="text-lg font-semibold">Tasks</h3>
              <div className="flex justify-around mt-2">
                <div className="me-5">
                  <p className="text-sm leading-3 mb-2">
                    Area
                    <br /> Covered
                  </p>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm">hectares</p>
                </div>
                <div>
                  <p className="text-sm leading-3 mb-2">
                    Weight
                    <br />
                    Harvested
                  </p>
                  <p className="text-2xl font-bold">1.5</p>
                  <p className="text-sm">tonnes</p>
                </div>
              </div>
              <button
                onClick={() => router.push("/workdetails")}
                className="text-xs underline mt-2"
              >
                VIEW DETAILS
              </button>
            </div>
            <div className="col-span-1 bg-[#ff784d] text-white p-4 rounded-lg text-center flex justify-center items-center flex-col">
              <h3 className="text-lg">Ranking</h3>
              <p className="text-2xl font-bold mt-1">#3</p>
              <h3 className="text-lg">Likes</h3>
              <p className="text-2xl font-bold mt-1">30</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-[40%]">
              <Calendar calData={calData} />
            </div>
            <div className="w-[60%]">
              <ScatterPlot data={taskData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
