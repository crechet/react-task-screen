import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './taskItem.css';

class TaskItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };
  }

  // Handle click on item. Open item details.
  itemClickHandler = (event) => {
    event.stopPropagation();

    this.setState((prevState) => {
      return {
        isOpened: !prevState.isOpened
      };
    });
  };

  completeTaskHandler = (event) => {
    event.stopPropagation();

    const { task, onCompleteTask } = this.props;
    onCompleteTask(task.id);
  };

  render() {
    const { task, number } = this.props;
    const { isOpened } = this.state;

    const completeButton = task.isActive
      ? <a className="waves-effect waves-light btn" onClick={this.completeTaskHandler}>Complete</a>
      : null;

    const completedClass = task.isActive ? '' : 'blue-grey lighten-2';

    let content = null;
    if (isOpened) {
      content = (
        <div className="task-details">
          <h4>{task.title}</h4>
          <p className="task-info"><span className="task-label">Created by: </span>{task.createdBy}</p>
          <p className="task-info"><span className="task-label">Description: </span>{task.description}</p>
          <p className="task-info"><span className="task-label">Status: </span>{task.isActive ? 'Active' : 'Completed'}</p>
          {completeButton}
        </div>
      );
    }

    return(
      <li className={`${completedClass} collection-item task `}>
        <div className="task-item" onClick={this.itemClickHandler}>
          <p className="task-title"><span>{`${number}. `}</span>{task.title}</p>
        </div>
        {content}
      </li>
    )
  }
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired
  }).isRequired,
  onCompleteTask: PropTypes.func.isRequired
};

export default TaskItem;
