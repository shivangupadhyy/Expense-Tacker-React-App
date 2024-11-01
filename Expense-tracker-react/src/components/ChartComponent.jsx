// ChartComponent.js
import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { GlobalContext } from '../context/GlobalState';

const ChartComponent = () => {
  const { transactions } = useContext(GlobalContext);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Group expenses by category for this example
    const categoryTotals = transactions.reduce((acc, transaction) => {
      const { amount, text } = transaction;
      acc[text] = (acc[text] || 0) + (amount < 0 ? -amount : 0);
      return acc;
    }, {});

    // Prepare data for Chart.js
    setChartData({
      labels: Object.keys(categoryTotals),
      datasets: [
        {
          label: 'Monthly Spending',
          data: Object.values(categoryTotals),
          backgroundColor: 'rgba(75,192,192,0.6)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    });
  }, [transactions]);

  return (
    <div>
      <h3>Monthly Spending Insights</h3>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
