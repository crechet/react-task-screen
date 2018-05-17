import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskItem from './TaskItem/TaskItem';
import Preloader from '../ui/Preloader';

class Tasks extends Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    // Load tasks from server on mount.
    fetchTasks();
  }

  // Handle complete task.
  completeTaskHandler = (taskID) => {
    const { completeTask } = this.props;
    completeTask(taskID);
  };

  renderTaskItems() {
    const { tasks, error, isTasksFetching } = this.props;

    if (isTasksFetching) {
      return <Preloader />;
    }

    if (!error) {
      return tasks.map( (task, index) => <TaskItem key={task.id}
                                                   number={index + 1}
                                                   task={task}
                                                   onCompleteTask={this.completeTaskHandler} /> );
    } else {
      return (
        <div>
          <p>Sorry, loading failed. Please try again.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <ul className="collection">
        {this.renderTaskItems()}
      </ul>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      createdBy: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.any,
  isTasksFetching: PropTypes.bool.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  isCurrentTaskLoading: PropTypes.bool.isRequired,
  errorCurrentTaskLoading: PropTypes.any
};

export default Tasks;
