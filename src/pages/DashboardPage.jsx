import React, {useEffect, useCallback, useState, useContext} from 'react'
import '../styles/dashboardStyle.css'
import { Box, Container } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Header from '../components/dashboardPage/Header'
import SummarySec from '../components/dashboardPage/SummarySec'
import TaskContext from '../context/TaskContext'

const DashboardPage = () => {
  
  const {data, loading, fetchTask} = useContext(TaskContext);

  return (
   <>
    <Sidebar />
    <Container sx={{width:"80vw", maxHeight:"100vh", backgroundColor:"#fff", paddingTop:"12px", paddingBottom:"12px", paddingLeft:"0px !important",  paddingRight:"0px !important" }}>
      <Box sx={{width:"100%", height:"100%", backgroundColor:"#fff", borderRadius:"8px", overflow:"scroll", paddingLeft:"5px", paddingRight:"5px"}}>
       <Header />
       <SummarySec />
      </Box>
    </Container>
   </>
  )
}

export default DashboardPage