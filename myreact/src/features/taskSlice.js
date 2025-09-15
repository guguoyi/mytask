import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'task',
  initialState : {
    taskList : null
  },
  reducers: {
        getAllTaskList(state, {payload}) {
            console.log("getAllTaskList playload:", payload);
            state.taskList = payload
        },
        removeById(state, {payload}) {
            state.taskList = state.taskList.filter(item => item.taskId !== payload)
        },
        completedById(state, {payload}) {
            state.taskList = state.taskList.map(item => {
                if(item.taskId === payload) {
                    return {...item, "taskStatus" : "已完成"}
                }
                return item;
            });
        }
    }
})



export const { getAllTaskList, removeById, completedById } = taskSlice.actions

export const getAllTaskListAsync = (data) => async (dispatch) => {
    console.log("getAllTaskListAsync data:", data);
    await dispatch(getAllTaskList(data))
}

export default taskSlice.reducer