import React from 'react';

const PageTitle = (props) => {
    return (
        <div className="page-header">
            <h1> {props.title} <small> {props.subtitle} </small> </h1>
        </div>
    );
};

export default PageTitle;
