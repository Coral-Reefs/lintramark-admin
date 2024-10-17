"use client";

import { Scatter } from "react-chartjs-2";
import {
  Chart,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(PointElement, LinearScale, Title, Tooltip, Legend);

const ScatterPlot = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Task Performance",
        data: data.map((item) => ({
          x: item.timeTaken,
          y: item.qualityScore,
        })),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time Taken (hours)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Quantity Harvested",
        },
      },
    },
  };

  return <Scatter className="w-full" data={chartData} options={options} />;
};

export default ScatterPlot;
