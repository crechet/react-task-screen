import * as taskActionTypes from '../actions/taskActionTypes';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null
};

let newTasks;

export default (state = initialState, action) => {
  switch (action.type) {
    case taskActionTypes.FETCH_TASKS_START:
      return {
        ...state,
        isLoading: true
      };

    case taskActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        tasks: [ ...action.payload ]
      };

    case taskActionTypes.FETCH_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: { ...action.payload }
      };

    case taskActionTypes.UPDATE_TASKS:
      newTasks = state.tasks.map((task) => {
        // Return updated task.
        if (task.id === +action.payload.id) {
          return { ...action.payload };
        }
        return task;
      });

      return {
        ...state,
        tasks: newTasks
      };

    default:
      return state;
  }
};
