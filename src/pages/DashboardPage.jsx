import React, { useEffect, useCallback, useState, useContext } from "react";
import "../styles/dashboardStyle.css";
import { Box, Container } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/dashboardPage/Header";
import SummarySec from "../components/dashboardPage/SummarySec";
import TaskContext from "../context/TaskContext";
import TaskTable from "../components/dashboardPage/TaskTable";
import SideBarMenu from "../components/mobile/SideBarMenu";
import { useTheme, useMediaQuery } from "@mui/material";

const DashboardPage = () => {
  const { data, loading, fetchTask } = useContext(TaskContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? <SideBarMenu /> : <Sidebar />}

      <Container
        sx={{
          width: isMobile ? "100vw" : "80vw",
          maxHeight: "100vh",
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
            backgroundColor: "#fff",
            borderRadius: "8px",
            overflow: "scroll",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          {isMobile ? <Box sx={{ marginTop: "15vw" }}></Box> : <Header />}

          <SummarySec />
          {isMobile ? (
            <Box sx={{ position: "relative", top: "-60vw" }}>
              <TaskTable />
            </Box>
          ) : (
            <TaskTable />
          )}
        </Box>
      </Container>
    </>
  );
};

export default DashboardPage;
