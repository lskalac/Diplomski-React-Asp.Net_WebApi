import React from 'react';
import TaskList from '../task/TaskList';

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

                    <button className="btn btn-success col-lg-12"> Add new </button>
                </div>
            </div>
        );
    }
}

export default TaskPanel;
