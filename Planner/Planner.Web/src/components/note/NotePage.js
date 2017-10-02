import React from 'react';
import PageTitle from '../common/PageTitle';
import NoteTable from '../note/NoteTable';
import NoteForm from '../note/NoteForm';

class NotePage extends React.Component {
    render() {
        return (
            <div>
                <PageTitle title="Notes" />
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <NoteForm onFormSubmit={this.props.onNoteFormSubmit} />
                    </div>
                    <div className="panel-body">
                        <NoteTable
                            notes={this.props.notes}
                            onDelete={this.props.onNoteDelete}
                            onMark={this.props.onNoteMark}
                        />
                    </div>
                </div>

           </div>
        );
    }
}

export default NotePage;


