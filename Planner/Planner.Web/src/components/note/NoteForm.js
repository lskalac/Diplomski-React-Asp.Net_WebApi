import React from 'react';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        const title = this.props.title || "";
        const text = this.props.text || "";
        this.state = {
            title: title,
            text: text
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit() {
        this.props.onFormSubmit({
            NoteId: this.props.id,
            Title: this.state.title,
            Text: this.state.text
        });
    }

    render() {
        const modalTitle = this.props.id ? "Edit note" : "Insert note";
        const buttonText = this.props.id ? "Edit" : "Add new";
        const buttonClass = this.props.id ? "btn btn-default btn-sm" : "btn btn-success";
        return (
            <div>
                <div className="input-group col-lg-2" data-toggle="modal" data-target="#noteModal">
                    <button className={buttonClass}> {buttonText} </button>
                </div>

                <div className="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h3 className="modal-title" id="myModalLabel"> {modalTitle} </h3>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="title"> Title: </label>
                                        <input type="text" className="form-control" id="title" maxlength="255"
                                            value={this.state.title} onChange={this.handleTitleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="text"> Text: </label>
                                        <textarea type="text" className="form-control" id="text"
                                            value={this.state.text} onChange={this.handleTextChange} > </textarea>
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

export default NoteForm;
