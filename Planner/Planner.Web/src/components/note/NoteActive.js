import React from 'react';
import { Link } from 'react-router';

const NoteActive = (props) => {
    return (
        <div className="jumbotron">
            <h1> {props.title} </h1>
            <p> {props.text} </p>
            <Link to="/notes" className="pull-right">
                Change active note <i className="glyphicon glyphicon-arrow-right"></i>
            </Link>
        </div>
    );
};

export default NoteActive;
