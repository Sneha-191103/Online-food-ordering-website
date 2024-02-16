import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', positive: 100, negative: -50 },
  { name: 'Feb', positive: 200, negative: -75 },
  { name: 'Mar', positive: 150, negative: -60 },
  // Add more data points for each month
];

const PositiveNegativeChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" />
      <YAxis yAxisId="right" orientation="right" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="positive" stroke="#82ca9d" yAxisId="left" name="Positive" />
      <Line type="monotone" dataKey="negative" stroke="#ff6f61" yAxisId="right" name="Negative" />
    </LineChart>
  );
};

export default PositiveNegativeChart;
