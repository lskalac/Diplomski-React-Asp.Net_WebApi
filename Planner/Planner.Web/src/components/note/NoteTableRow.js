import React from 'react';
import { Link } from 'react-router';

class NoteTableRow extends React.Component{
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleMark = this.handleMark.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    handleMark() {
        this.props.onMark(this.props.id);
    }

    render() {
        return (
            <tr>
                <td> {this.props.title} </td>
                <td> {this.props.text} </td>
                <td>
                    <button type="button" className="btn btn-default btn-sm m-r-xs"> Edit </button>
                    <button type="button" className="btn btn-default btn-sm m-r-xs" onClick={this.handleMark}> Mark as active </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.handleDelete}> Delete </button>
                </td>
            </tr>
        );
    }
};

export default NoteTableRow;
