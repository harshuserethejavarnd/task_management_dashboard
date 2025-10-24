import React from "react";
import "../styles/dashboardStyle.css";
import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/dashboardPage/Header";
import AllTaskTable from "../components/taskPage/AllTaskTable";

const TasksPage = () => {
  return (
    <>
      <Sidebar />
      <Container
        sx={{
          width: "80vw",
          minHeight: "100vh",
          backgroundColor: "#fff",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffff",
            borderRadius: "8px",
          }}
        >
          <Header />
          <AllTaskTable />
        </Box>
      </Container>
    </>
  );
};

export default TasksPage;
