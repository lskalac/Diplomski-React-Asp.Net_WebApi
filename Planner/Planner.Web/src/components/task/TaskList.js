import React from 'react';
import TaskListItem from '../task/TaskListItem';

class TaskList extends React.Component{
    render() {
        const taskListItems = this.props.tasks.map((task) => (
            <TaskListItem
                key={task.TaskId}
                id={task.TaskId}
                name={task.Name}
                dateTime={task.DueDateTimeToString}
            />
        ));
        return (
            <ul className="list-group">
                {taskListItems}
            </ul>
        );
    }
}

export default TaskList;
