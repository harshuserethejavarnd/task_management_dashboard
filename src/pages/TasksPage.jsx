import React from "react";
import "../styles/dashboardStyle.css";
import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/dashboardPage/Header";
import AllTaskTable from "../components/taskPage/AllTaskTable";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SideBarMenu from "../components/mobile/SideBarMenu";

const TasksPage = () => {
     const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? <SideBarMenu /> : <Sidebar />}
      <Container
        sx={{
          width: isMobile ? "100vw" : "80vw",
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
                  {isMobile ? <Box sx={{ marginTop: "15vw" }}></Box> : <Header />}

          <AllTaskTable isMobile={isMobile} />
        </Box>
      </Container>
    </>
  );
};

export default TasksPage;
