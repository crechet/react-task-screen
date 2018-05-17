import { connect } from 'react-redux';
import { fetchTasks, completeTask } from '../../actions/taskActions';

import Tasks from './Tasks';

const mapStateToProps = ( { tasks, currentTask } ) => {
  return {
    tasks: tasks.tasks,
    error: tasks.error,
    isTasksFetching: tasks.isLoading,
    isCurrentTaskLoading: currentTask.isLoading,
    errorCurrentTaskLoading: currentTask.error,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    completeTask: (taskId) => dispatch(completeTask(taskId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
