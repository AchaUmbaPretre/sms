import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './statistiqueChart.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatistiqueChart = () => {
  const data = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Semestre 01',
        data: [4, 6, 5, 3, 7],
        backgroundColor: '#60a5fa', // bleu clair
      },
      {
        label: 'Semestre 02',
        data: [3.5, 5, 4.8, 2.9, 6.8],
        backgroundColor: '#2563eb', // bleu foncé
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Average Students',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className='statistiqueChart'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatistiqueChart;
