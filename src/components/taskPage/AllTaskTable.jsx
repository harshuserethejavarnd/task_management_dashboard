import { Box, Container, Typography, Card, Chip, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../../context/TaskContext'

const AllTaskTable = ({ isMobile }) => {
  const { data, loading, fetchTask } = useContext(TaskContext);
  const [filteredData, setFilteredData] = useState([]);
  const [cat, setCat] = useState('all');

  const handleChipColor = (status) => {
    if (status === "to-do") {
      return "#dfdfdfb5";
    } else if (status === "in-progress") {
      return "#ffea005f";
    } else {
      return "#04ff004e";
    }
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleCategory = (category) => {
    setCat(category);
    const arr = category === "all" ? data : data.filter((e) => e.status === category);
    setFilteredData(arr);
  };

  return (
    <Container sx={{ width: "100%", height: "90%", position: "relative", color: "#000", p: 0 }}>
      <Typography sx={{ color: "#000", fontSize: "1.4rem", pt: 2, fontWeight: "500", mb: 2, pl: isMobile ? 4 : 0}}>
        My Tasks
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap:isMobile ? "wrap" : "nowrap", pl: isMobile ? 4 : 0 }}>
        <Button
          sx={{
            backgroundColor: cat === 'all' ? '#4d2bcf' : '#dfdfdf',
            width: "10%",
            color: cat === 'all' ? '#fff' : '#000',
            fontSize: ".9rem",
            textTransform: "capitalize"
          }}
          onClick={() => handleCategory('all')}
        >
          All
        </Button>
        <Button
          sx={{
            backgroundColor: cat === 'in-progress' ? '#4d2bcf' : '#dfdfdf',
            color: cat === 'in-progress' ? '#fff' : '#000',
            fontSize: ".9rem",
            textTransform: "capitalize"
          }}
          onClick={() => handleCategory('in-progress')}
        >
          In-Progress
        </Button>
        <Button
          sx={{
            backgroundColor: cat === 'to-do' ? '#4d2bcf' : '#dfdfdf',
            width: "10%",
            color: cat === 'to-do' ? '#fff' : '#000',
            fontSize: ".9rem",
            textTransform: "capitalize"
          }}
          onClick={() => handleCategory('to-do')}
        >
          Pending
        </Button>
        <Button
          sx={{
            backgroundColor: cat === 'Completed' ? '#4d2bcf' : '#dfdfdf',
            color: cat === 'Completed' ? '#fff' : '#000',
            fontSize: ".9rem",
            textTransform: "capitalize"
          }}
          onClick={() => handleCategory('Completed')}
        >
          Completed
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "start",
          gap: "10px",
          p: 1,
          mt: 2
        }}
      >
        {filteredData.map((e, index) => (
          <Card
            key={index}
            sx={{
              width: isMobile ? "90%" : "30%",
              minWidth: isMobile ? "250px" : "200px",
              p: 2,
              mb: isMobile ? 1 : 0
            }}
          >
            <Typography sx={{ fontSize: "1.1rem", mb: 1 }}>{e.taskName}</Typography>
            <Typography sx={{ fontSize: ".8rem", color: "gray", mb: 2 }}>{e.taskDesc}</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Chip sx={{ backgroundColor: handleChipColor(e.status), textTransform: "capitalize" }} label={e.status} />
              <Typography sx={{ fontSize: ".8rem", color: "gray" }}>Due Date: {e.dueDate}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

export default AllTaskTable
