import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            dueDateTime: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleTimeChange(e) {
        this.setState({ dueDateTime: e.target.value });
    }

    handleSubmit() {
        this.props.onFormSubmit({
            Name: this.state.name,
            Description: this.state.description,
            DueDateTimeToString: this.state.dueDateTime,
            PriorityId: this.props.priorityId
        });
    }
    render() {
        return (
            <div>
                <div className="input-group col-lg-2" data-toggle="modal" data-target="#taskModal">
                    <button className="btn btn-success"> Add Task </button>
                </div>

                <div className="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h3 className="modal-title" id="myModalLabel"> Add task </h3>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="title"> Name: </label>
                                        <input type="text" className="form-control" id="title" maxlength="255"
                                            value={this.state.name} onChange={this.handleNameChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="text"> Description: </label>
                                        <textarea type="text" className="form-control" id="text"
                                            value={this.state.description} onChange={this.handleDescriptionChange} > </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="text"> Due Date </label>
                                        <input type="text" className="form-control" id="text" placeholder="dd/MM/yyyy HH:mm"
                                            value={this.state.dueDateTime} onChange={this.handleTimeChange} /> 
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TaskForm;

