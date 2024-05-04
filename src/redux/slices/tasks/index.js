import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksById: {}, // An object to hold tasks by their IDs
};

export const taskSlice = createSlice({
  name: 'r1',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Add a new task to the tasksById object
      state.tasksById[action.payload.id] = action.payload;
    },
    removeTask: (state, action) => {
      // Remove a task by its ID from the tasksById object
      delete state.tasksById[action.payload];
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
