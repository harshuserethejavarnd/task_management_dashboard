import React, { useCallback, useContext } from "react";
import {
  PieChart,
  Pie,
  Label,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../App.css";
import TaskContext from "../../context/TaskContext";

const PieChartComponent = ({isMobile}) => {

  const {totalTaskCount, runningTaskCount, pendingTaskCount, completedtaskCount} = useContext(TaskContext);


  const chartData = [
    { namep: "Total", value: totalTaskCount(), fill: "#4d2bcf" },
    { namep: "Running", value: runningTaskCount(), fill: "#eb00e7ff" },
    { namep: "Pending", value: pendingTaskCount(), fill: "#FFBB28" },
    { namep: "Completed", value: completedtaskCount(), fill: "#FF8042" },
  ];

  const MyPie = () => (
    <Pie
      data={chartData}
      dataKey="value"
      nameKey="namep"
      outerRadius="80%"
      innerRadius="55%"
      isAnimationActive={false}
    />
  );

  return (
    <>
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
          <MyPie />
          <Label position="center" fill="#666"></Label>
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "1rem" }} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartComponent;
