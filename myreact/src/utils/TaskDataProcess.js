import { taskList } from "./taskMockData";
// 浏览器端直接使用 window.localStorage，无需引入 node-localstorage


function initTaskList(taskListNew = taskList) {
    let taskCopy = [...taskListNew];
    if (localStorage.getItem('taskList') === null) {
        localStorage.setItem('taskList', JSON.stringify(taskCopy));
    }
    // 返回反序列化后的任务列表
    return JSON.parse(localStorage.getItem('taskList'));
}

function add(data) {
    let taskCopy = [...initTaskList()];
    taskCopy.push(data);
    localStorage.setItem('taskList', JSON.stringify(taskCopy));
    return taskCopy;
}

function finish(taskId) {
    let taskCopy = [...initTaskList()];
    let index = taskCopy.findIndex((item) => item.taskId === taskId);
    taskCopy[index].taskStatus = "已完成";
    localStorage.setItem('taskList', JSON.stringify(taskCopy));
    return taskCopy;
}

function getNextId() {
    let taskCopy = [...initTaskList()];
    let maxId = 0;
    taskCopy.forEach((e) => {
        if (+e.taskId > maxId) {
            maxId = +e.taskId;
        }
    })

    return maxId + 1;
}

function remove(taskId) {
    let taskCopy = [...initTaskList()];
    let index = taskCopy.findIndex((item) => item.taskId === taskId);
    if (index !== -1) {
        taskCopy.splice(index, 1);
    }
    localStorage.setItem('taskList', JSON.stringify(taskCopy));
    return taskCopy;
}

function getTaskByFilter(status) {
    let taskCopy = [...initTaskList()];
    return taskCopy.filter((item) => {
        if (status === "全部") {
            return true;
        } else {
            return item.taskStatus === status;
        }
    });
}


export { initTaskList, add, remove, getTaskByFilter, finish, getNextId};