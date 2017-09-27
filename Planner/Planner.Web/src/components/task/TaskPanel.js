import React from 'react';
import TaskList from '../task/TaskList';
import TaskForm from '../task/TaskForm';

class TaskPanel extends React.Component{
    render() {
        let panelClass = "panel panel-";
        if (this.props.id === 1) {
            panelClass += "danger";
        } else if (this.props.id === 2) {
            panelClass += "warning";
        } else {
            panelClass += "default";
        }
        return (
            <div className={panelClass}>
                <div className="panel-heading">
                    {this.props.name}
                </div>
                <div className="panel-body">
                    <TaskList tasks={this.props.tasks} onTaskClose={this.props.onTaskClose} />
                    <TaskForm priorityId={this.props.id} onFormSubmit={this.props.onFormSubmit} />
                </div>
            </div>
        );
    }
}

export default TaskPanel;
