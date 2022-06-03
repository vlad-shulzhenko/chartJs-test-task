import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import colors from 'constants/colors';

ChartJS.register({
  LineElement,
  PointElement,
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

const LineChart: React.FC<Props> = ({ x, y }) => {
  return (
    <Line
      height="95vh"
      data={{
        labels: x,
        datasets: [
          {
            data: y,
            borderColor: colors,
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

export default LineChart;
