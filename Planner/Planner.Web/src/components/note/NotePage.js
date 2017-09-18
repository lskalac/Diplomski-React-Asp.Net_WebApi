import React from 'react';
import PageTitle from '../common/PageTitle';
import NoteTable from '../note/NoteTable';
import axios from "axios";

class NotePage extends React.Component {
    render() {
        return (
            <div>
                <PageTitle title="Notes" />
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="input-group col-lg-2">
                            <button className="btn btn-success"> Add new </button>
                        </div>
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
