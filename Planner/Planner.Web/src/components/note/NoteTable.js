import React from 'react';
import NoteTableRow from '../note/NoteTableRow';

class NoteTable extends React.Component {
    render() {
        const noteTableRows = this.props.notes.map((note) => (
            <NoteTableRow
                key={note.NoteId}
                id={note.NoteId}
                title={note.Title}
                text={note.Text}
                onDelete={this.props.onDelete}
                onMark={this.props.onMark}
            />
        ));
        return (
            <div className="table-responsive">
                <table className="table table-stripped table-hover">
                    <thead>
                        <tr>
                            <th className="col-lg-2"> Title </th>
                            <th className="col-lg-7"> Text </th>
                            <th className="col-lg-3"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {noteTableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NoteTable;
