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


export const data = {
  datasets: [
    {
      label: "Followers",
      data: artists.map((artist) => ({
        x: artist.name,
        y: artist.normalized_followers,
      })),
      backgroundColor: "rgba(75,192,192,1)",
    },
  ],
};

export default function App() {
  return <Scatter options={options} data={data} />;
}
