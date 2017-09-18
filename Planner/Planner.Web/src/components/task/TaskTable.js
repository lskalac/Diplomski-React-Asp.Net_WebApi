import React from 'react';
import TaskTableRow from '../task/TaskTableRow';

class TaskTable extends React.Component {
    render() {
        const taskTableRows = this.props.todaysTasks.map((task) => (
            <TaskTableRow
                key={task.TaskId}
                id={task.TaskId}
                name={task.Name}
                description={task.Description}
                dateTime={task.DueDateTimeToString}
                priorityId={task.PriorityId}
            />
        ));
        return(
          <div className="table-responsive">
              <table className="table table-hover">
                  <thead>
                        <tr>
                            <th className="col-lg-2"> Due date </th>
                            <th className="col-lg-2"> Name </th>
                            <th className="col-lg-6"> Description </th>
                            <th className="col-lg-2"> Actions </th>
                      </tr>
                  </thead>
                  <tbody>
                        {taskTableRows}
                  </tbody>
              </table>
          </div>
        );
    }
}

export default TaskTable;
