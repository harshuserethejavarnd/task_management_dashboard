import React from 'react'
import { PieChart, Pie, Label, Legend, Tooltip } from 'recharts';
import '../../App.css';

const data = [
  { namep: 'Total', value: 400, fill: '#4d2bcf' },
  { namep: 'Running', value: 300, fill: '#eb00e7ff'},
  { namep: 'Pending', value: 300, fill: '#FFBB28' },
  { namep: 'Completed', value: 200, fill: '#FF8042' },
];



const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="namep" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

const PieChartComponent = () => {
  return (
    <>
      <PieChart responsive style={{ height: 'calc(100% - 10px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
        <MyPie />
        <Label position="center" fill="#666">
          
        </Label>
        <Tooltip />
         <Legend wrapperStyle={{fontSize:".7rem"}}/>
      </PieChart>
    </>
  )
}

export default PieChartComponent