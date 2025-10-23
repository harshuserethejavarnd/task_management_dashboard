import React from 'react'
import '../styles/dashboardStyle.css'
import { Box, Container } from '@mui/material'
import Sidebar from '../components/Sidebar'

const TasksPage = () => {
  return (
    <>
    <Sidebar />
    <Container sx={{width:"80vw", minHeight:"100vh", backgroundColor:"#fff", paddingTop:"12px", paddingBottom:"12px", paddingLeft:"0px !important",  paddingRight:"0px !important" }}>
      <Box sx={{width:"100%", height:"100%", backgroundColor:"#f0f0f0ff", borderRadius:"8px"}}>
       Tasks Page
      </Box>
    </Container>
    </>
  )
}

export default TasksPage