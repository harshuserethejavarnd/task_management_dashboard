import {
  Box,
  Card,
  cardClasses,
  Grid,
  ListItem,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import React, { useCallback, useContext, useEffect, useState } from "react";
import EggIcon from "@mui/icons-material/Egg";
import TaskContext from "../../context/TaskContext";
import PieChartComponent from "../charts/PieChart";
import BarChartComponent from "../charts/BarChart";


const SummarySec = () => {
  //Context Data --->
  const { data, loading, fetchTask, addTask } = useContext(TaskContext);

  //Total Tasks
  const totalTaskCount = () => {
    return data?.length;
  };

  //Running Tasks
  const runningTaskCount = () => {
    const filteredData = data.filter((e) => e.status === "in-progress");
    return filteredData?.length;
  };

  //Pending Task
  const pendingTaskCount = () => {
    const filteredData = data.filter((e) => e.status === "to-do");
    return filteredData?.length;
  };

  //completed Task
  const completedtaskCount = () => {
    const filteredData = data.filter((e) => e.isCompleted === "true");
    return filteredData?.length;
  };

  //Status --->
  const cardInfo = [
    { name: "Total Tasks", color: "blue", val: totalTaskCount() },
    { name: "Running Tasks", color: "aqua", val: runningTaskCount() },
    { name: "Pending Tasks", color: "green", val: pendingTaskCount() },
    { name: "Completed Tasks", color: "violet", val: completedtaskCount() },
  ];

  //Current Date Time --->
  const now = new Date();
  const dateTime = now.toLocaleString();

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "45%",
        display:"flex",
        flexDirection:"column",
        gap:"15px"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "start",
          gap: "8px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "1px 1px 5px 1px #00000020",
          lineHeight: "0px",
        }}
      >
        <Box sx={{ pl: 2, pt:1 }}>
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "500", m: 0, p: 0 }}
          >
            Hello! Username
          </Typography>
          <Typography sx={{ color: "gray", fontSize: ".9rem", m: 0, p: 0 }}>
            {dateTime}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          {cardInfo.map((e, index) => (
            <ListItem
              key={index}
              sx={{ fontWeight: "500", fontSize: ".9rem", color: "gray" }}
            >
              <EggIcon sx={{ fontSize: "1.2rem", color: e.color }} />
              {e.name}: {e.val}
            </ListItem>
          ))}
        </Box>
      </Box>

      <Box sx={{ width: "100%", height: "100%", display:"flex", justifyContent:"space-between",}}>
        <Box sx={{width:"49%", height:"100%", backgroundColor:"#fff", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"10px", boxShadow: "1px 1px 5px 1px #00000020", position:"relative"}}>
        <Typography sx={{position:"absolute", top:10, left:20, fontSize:".9rem", fontWeight:"600"}}>Task Distribution I</Typography>
        <PieChartComponent />
        </Box>
        <Box sx={{width:"49%", height:"100%", backgroundColor:"#fff", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"10px", boxShadow: "1px 1px 5px 1px #00000020", position:"relative"}}>
          <Typography sx={{position:"absolute", top:10, left:20, fontSize:".9rem", fontWeight:"600"}}>Task Distribution II</Typography>
           <Card sx={{width:"100px", height:"125px", backgroundColor:"#fff", position:"absolute", top:10, right:10, boxShadow:"none", lineHeight:"5px", alignContent:"center"}}>
            <ListItem sx={{display:"flex", gap:"5px", fontSize:".7rem", color:"#4c2bce"}}>
               <Box sx={{width:"8px", height:"10px", backgroundColor:"#4c2bce"}}></Box> Total
            </ListItem>
            <ListItem sx={{display:"flex", gap:"5px", fontSize:".7rem", color:"#b82acf"}}>
               <Box sx={{width:"8px", height:"10px", backgroundColor:"#b82acf"}}></Box> Running
            </ListItem>
            <ListItem sx={{display:"flex", gap:"5px", fontSize:".7rem", color:"#ef8002"}}>
               <Box sx={{width:"8px", height:"10px", backgroundColor:"#ef8002"}}></Box> Pending
            </ListItem>
            <ListItem sx={{display:"flex", gap:"5px", fontSize:".7rem", color:"#ffba29"}}>
               <Box sx={{width:"8px", height:"10px", backgroundColor:"#ffba29"}}></Box> Completed
            </ListItem>
           </Card>
          <BarChartComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default SummarySec;
