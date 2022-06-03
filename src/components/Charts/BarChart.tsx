import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  BarElement,
  Tooltip,
} from 'chart.js';
import colors from 'constants/colors';

ChartJS.register(
  {
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    Title,
    Legend,
  },
);

interface Props {
  x: string[];
  y: string[];
}

const BarChart: React.FC<Props> = ({ x, y }) => {
  return (
    <Bar
      height="95vh"
      data={{
        labels: x,
        datasets: [
          {
            data: y,
            backgroundColor: colors,
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default BarChart;
