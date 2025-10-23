import React from 'react'
import { BarChart, Bar, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: 'Tasks',
    Total: 40,
    Running: 12,
    Pending: 8,
    Completed: 15,
  }
];

const BarChartComponent = () => {
  return (
    <>
     <BarChart
      style={{ width: '100%', maxWidth: '450px', maxHeight: '225px', aspectRatio: 1.618, }}
      responsive
      data={data}
    >
      <Bar dataKey="Total" fill="#4d2bcf" />
      <Bar dataKey="Running" fill="#eb01e6" />
      <Bar dataKey="Pending" fill="#ffba29" />
      <Bar dataKey="Completed" fill="#fe8142" />
     
      
     
    </BarChart>
    </>
  )
}

export default BarChartComponent