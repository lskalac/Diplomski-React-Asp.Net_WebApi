import React from 'react';
import NoteActive from '../note/NoteActive';
import TaskTable from '../task/TaskTable';
import PageTitle from '../common/PageTitle';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NoteActive
                  title={this.props.activeNote.Title}
                  text={this.props.activeNote.Text}
                />
                <PageTitle title="Todays tasks" />
                <div className="m-b-sm">
                    <button className="btn btn-success"> Add new </button>
                </div>
                <TaskTable
                    todaysTasks={this.props.todaysTasks}
                />
            </div>
        );
    }
}

export default HomePage;
