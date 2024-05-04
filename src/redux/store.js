import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './slices/tasks/index.js'


export const store = configureStore({
  reducer: {
    r1:taskSlice,
  },
})