import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';
import colors from 'constants/colors';

ChartJS.register({
  DoughnutController,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
});

interface Props {
  x: string[];
  y: string[];
}

const DoughnutChart: React.FC<Props> = ({ x, y }) => {
  return (
    <Doughnut
      height="100%"
      width="100%"
      data={{
        labels: x,
        datasets: [{
          data: y,
          backgroundColor: colors,
          hoverOffset: 3,
        }],
      }}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        animation: {
          animateScale: true,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
