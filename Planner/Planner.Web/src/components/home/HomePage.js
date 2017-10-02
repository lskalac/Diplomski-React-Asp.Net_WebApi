import React from 'react';
import NoteActive from '../note/NoteActive';
import TaskTable from '../task/TaskTable';
import PageTitle from '../common/PageTitle';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NoteActive
                  title={this.props.activeNote.Title}
                  text={this.props.activeNote.Text}
                />
                <PageTitle title="Todays tasks" />
                <TaskTable
                    todaysTasks={this.props.todaysTasks}
                />
                <Link to="/tasks" className="pull-right">
                    Add tasks <i className="glyphicon glyphicon-arrow-right"></i>
                </Link>
            </div>
        );
    }
}

export default HomePage;
