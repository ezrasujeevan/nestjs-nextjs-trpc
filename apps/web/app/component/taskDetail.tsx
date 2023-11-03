// @flow
import * as React from "react";
import { Card, CardContent, Grid, Switch, Typography } from "@mui/material";
import { Task } from "@web/app/Types/task";
import { trpc } from "@web/app/trpc";

type Props = {
  task: Task;
};
export const TaskDetail = async ({ task }: Props) => {
  const handleStatusChange = (taskId: number) => {
    await trpc.tasks.update;
  };

  return (
    <Grid item key={task.id} xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status:
            <Switch
              checked={task.status}
              onChange={() => handleStatusChange(task.id)}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created Date: {task.createdDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Updated Date: {task.updatedDate}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
