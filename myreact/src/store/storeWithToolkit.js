import { configureStore } from '@reduxjs/toolkit'

import taskReducer from '../features/taskSlice'

const storeWithToolkit = configureStore({
  reducer: {
    task: taskReducer
  },
  // middleware: [reduxThunk, reduxLogger],
})

export default storeWithToolkit;