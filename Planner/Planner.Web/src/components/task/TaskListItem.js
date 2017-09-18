import React from 'react';

const TaskListItem = (props) => {
    return (
        <li className="list-group-item">
            <span className="pull-right"> <input type="checkbox" /> </span>
            <span>{props.dateTime} <br /> {props.name}</span>
        </li>
    );
}

export default TaskListItem;
