import React from 'react';

class TaskTableRow extends React.Component{
    render() {
        var rowClass = "";
        if (this.props.priorityId === 1) {
            rowClass = "danger";
        } else if (this.props.priorityId === 2) {
            rowClass = "warning";
        }
        return (
            <tr className={rowClass}>
                <td> {this.props.dateTime} </td>
                <td> {this.props.name} </td>
                <td> {this.props.description} </td>
                <td>
                    <button className="btn btn-default"> Mark as completed </button>
                </td>
            </tr>
        );
    }
}

export default TaskTableRow;

