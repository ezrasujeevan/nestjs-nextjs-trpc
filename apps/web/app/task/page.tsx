import * as React from "react";
import { TaskDetail } from "@web/app/component/taskDetail";
import { Task } from "@web/app/Types/task";
import { Grid } from "@mui/material";

const TasksPage = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: true, // Completed
      createdDate: "2023-11-01",
      updatedDate: "2023-11-02",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      status: false, // In Progress
      createdDate: "2023-10-29",
      updatedDate: "2023-10-30",
    },
    // Add more tasks as needed
  ];
  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <TaskDetail key={task.id} task={task} />
      ))}
    </Grid>
  );
};
export default TasksPage;
