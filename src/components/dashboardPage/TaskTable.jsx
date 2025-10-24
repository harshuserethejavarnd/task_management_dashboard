import { Box, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import StickyHeadTable from './StickyHeaderTable';



const TaskTable = () => {
  return (
    <Box sx={{width:"100%", height:"75%", marginTop:"10%"}}>
        <Typography sx={{color:"#000",p:1, fontSize:"1rem", fontWeight:"bold", display:"flex", justifyContent:"start", alignItems:"center", gap:1}}>Recent Tasks <Box sx={{width:"90%", height: 3, backgroundColor:"#4c2bce7f"}}></Box></Typography>
        <StickyHeadTable />
    </Box>
  )
}

export default TaskTable