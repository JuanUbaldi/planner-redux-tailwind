import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/taskSlice";
export const store = configureStore({
  reducer: { tasks: tasksReducer },
});
