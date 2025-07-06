import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const ChartPie = () => {
  const data = {
    labels: ['Élèves', 'Enseignants', 'Parents', 'Staff'],
    datasets: [
      {
        label: 'Répartition',
        data: [2000, 250, 500, 100],
        backgroundColor: [
          '#3b82f6', // bleu
          '#10b981', // vert
          '#f59e0b', // orange
          '#ef4444', // rouge
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: '500',
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: '#111827',
        titleColor: '#fff',
        bodyColor: '#e5e7eb',
        padding: 10,
        cornerRadius: 6,
      },
    },
  };

  return (
    <div style={{ maxWidth: 450, margin: '0 auto', background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#111827' }}>Répartition des utilisateurs</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartPie;
