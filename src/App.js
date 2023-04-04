import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js';
import { Scatter } from "react-chartjs-2";
import artists from './artists';

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);


const options = {
  responsive: true,
  title: { display: true, text: "Scatter Plot of Followers" },
  scales: {
    x: {
      ticks: {
        display: true,
      },
      type: "category",
      labels: artists.map((artist) => artist.name),
    },
    y: {
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

const randomRGBA = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.random().toFixed(1); // Alpha value between 0.0 and 1.0
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}

export const data = {
  datasets: [
    {
      label: "Followers",
      data: artists.map((artist) => ({
        x: artist.name,
        y: artist.normalized_followers,
      })),
      backgroundColor: randomRGBA(),
    },
  ],
};

export default function App() {
  return <Scatter options={options} data={data} />;
}
