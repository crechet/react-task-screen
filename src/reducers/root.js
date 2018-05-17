import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  tasks: tasksReducer,
  currentTask: taskReducer
});
