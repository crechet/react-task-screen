import * as taskActionTypes from '../actions/taskActionTypes';

const initialState = {
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case taskActionTypes.COMPLETE_TASK_START:
      return {
        isLoading: true,
        error: null
      };

    case taskActionTypes.COMPLETE_TASK_SUCCESS:
      return {
        isLoading: false,
        error: null
      };

    case taskActionTypes.COMPLETE_TASK_FAILURE:
      return {
        isLoading: false,
        error: { ...action.payload }
      };

    default:
      return state;
  }
};
