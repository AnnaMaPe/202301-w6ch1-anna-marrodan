import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockTasks } from "../mockTasks";

const { tasks } = mockTasks;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasks,
  reducers: {
    toggleTasksStatus: (currentTasks, action: PayloadAction<number>) =>
      currentTasks.map((task) => ({
        ...task,
        isDone: task.id === action.payload ? !task.isDone : task.isDone,
      })),
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { toggleTasksStatus: toggleTasksStatusActionCreator } =
  tasksSlice.actions;
