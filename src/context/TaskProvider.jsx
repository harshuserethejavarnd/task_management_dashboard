import React, { useState } from "react";
import TaskContext from "./TaskContext";
import axios from "axios";
const baseURL = "https://68f92523deff18f212b8c71a.mockapi.io/api/v1/";

const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchTask = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}createtask`);
      if (!response.data) {
        console.log("No data received");
        return;
      }
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (formData) => {
    try {
      setLoading(true);

      const response = await axios.post(`${baseURL}createtask`, formData);
      if (response.status !== 201) {
        console.log("Something went wrong.");
      }
      console.log("Task created.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`${baseURL}/createtask/${id}`);
      if (response.status !== 200) {
        console.log("There's an error deleting record.");
        console.log(response.message);
      }

      console.log("Task deleted.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${baseURL}/createtask/${id}`,
        updatedData
      );
      if (response.status !== 200) {
        console.log("There's an error updating record.");
        console.log(response.message);
      }
      console.log("Task updated.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const completeTask = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${baseURL}/createtask/${id}`,
        updatedData
      );
      if (response.status !== 200) {
        console.log("There's an error updating record.");
        console.log(response.message);
      }
      console.log("Task completed.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //Task Counts Funtions
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
    const filteredData = data.filter((e) => e.status === "Completed");
    return filteredData?.length;
  };


  return (
    <TaskContext.Provider
      value={{
        data,
        loading,
        fetchTask,
        addTask,
        deleteTask,
        updateTask,
        completeTask,
        totalTaskCount,
        runningTaskCount,
        pendingTaskCount,
        completedtaskCount
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
