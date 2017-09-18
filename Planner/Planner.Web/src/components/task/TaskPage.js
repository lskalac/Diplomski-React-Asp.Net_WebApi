import React from 'react';
import PageTitle from '../common/PageTitle';
import TaskList from '../task/TaskList';
import TaskPanel from '../task/TaskPanel';

class TaskPage extends React.Component{
    render() {
        const taskPanels = this.props.tasksByPriority.map((priority) => (
            <div className="col-lg-4">
              <TaskPanel
                  key={priority.Id}
                  id={priority.Id}
                  name={priority.Name}
                  tasks={priority.Tasks}
                />
            </div>
        ));
        return (
            <div>
                <PageTitle title="Tasks" />
                {taskPanels}
            </div>
        );
    }
}

export default TaskPage;
