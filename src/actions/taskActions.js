import * as taskActionTypes from './taskActionTypes';
import axios from 'axios';

/** Indicates that some task related action was started. */
export const taskRequestStart = type => {
  return {
    type
  };
};

/** Indicates that some task related action was succeeded. */
export const taskRequestSuccess = (type, payload) => {
  return {
    type,
    payload
  };
};

/** Indicates that some task related action was failed. */
export const taskRequestFailure = (type, payload) => {
  return {
    type,
    payload
  };
};

/** Update task list after change task status. */
export const updateTaskList = (type, updatedTask) => {
  return {
    type,
    updatedTask
  };
};

/** Fetch tasks from server. */
export const fetchTasks = () => async dispatch => {
  dispatch(taskRequestStart(taskActionTypes.FETCH_TASKS_START));

  let response;
  try {
    response = await axios.get('./tasks.json');
    dispatch(taskRequestSuccess(taskActionTypes.FETCH_TASKS_SUCCESS, response.data.tasks));
  } catch(error) {
    const errorData = {
      message: error.message,
      status: error.response && error.response.status,
      error: error
    };
    dispatch(taskRequestFailure(taskActionTypes.FETCH_TASKS_FAILURE, errorData));
  }
};

/** Complete task with given id. */
export const completeTask = (taskId) => async dispatch => {
  dispatch(taskRequestStart(taskActionTypes.COMPLETE_TASK_START));

  let response;
  try {
    // Simulate task by id request.
    response = await axios.get('./tasks.json');
    const tasks = response.data.tasks;
    let foundTask = tasks.find((task) => {
      return task.id === +taskId
    });

    // If task wasn't found.
    if (!foundTask) {
      throw new Error('Task not found');
    }

    foundTask.isActive = false;

    dispatch(taskRequestSuccess(taskActionTypes.COMPLETE_TASK_SUCCESS, foundTask));
    // Save updated tasks list in redux store.
    dispatch(taskRequestSuccess(taskActionTypes.UPDATE_TASKS, foundTask));

  } catch(error) {
    const errorData = {
      message: error.message,
      status: error.response && error.response.status,
      error: error
    };
    dispatch(taskRequestFailure(taskActionTypes.COMPLETE_TASK_FAILURE, errorData));
  }
};
