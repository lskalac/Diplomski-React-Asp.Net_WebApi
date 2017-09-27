import React from 'react';

class TaskListItem extends React.Component{
    constructor(props) {
        super(props);

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange() {
        this.props.onTaskClose(this.props.id);
    }

    render() {
        const itemClass = this.props.isCompleted ? "strikethrough" : "";
        const isDisabled = this.props.isCompleted ? true : false;
        return (
            <li className="list-group-item">
                <span className="pull-right"> <input type="checkbox" checked={this.props.isCompleted} onChange={this.handleCheckboxChange} disabled={isDisabled} /> </span>
                <span className={itemClass}>{this.props.dateTime} <br /> {this.props.name}</span>
            </li>
        );
    }
}

export default TaskListItem;
