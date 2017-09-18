import React, { PropTypes } from 'react';
import Header from './common/Header';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            activeNote: {},
            tasksByPriority: [],
            todaysTasks: []
        };

        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.handleNoteMark = this.handleNoteMark.bind(this);
    }

    componentDidMount() {

        axios.get('http://localhost:59342/api/note')
            .then((response) => {
                let activeNote = response.data.find(function (note) {
                    return note.IsActive === true;
                });
                if (!activeNote)
                    activeNote = {
                        Title: "Decide. Commit. Succeed."
                    };
                this.setState({
                    notes: response.data,
                    activeNote: activeNote
                });
            });

        axios.get('http://localhost:59342/api/task/priority')
            .then((response) => {
                this.setState({
                    tasksByPriority: response.data
                });
            });

        axios.get('http://localhost:59342/api/task/today')
            .then((response) => {
                this.setState({
                    todaysTasks: response.data
                });
            });
    }

    handleNoteDelete(noteId) {
        axios.delete('http://localhost:59342/api/note/' + noteId)
            .then(function (response) {
                this.setState({
                    notes: this.state.notes.filter(function (note) { return note.NoteId !== noteId })
                });
            }.bind(this));
    }

    handleNoteMark(noteId) {
        axios.put('http://localhost:59342/api/note/mark', { NoteId: noteId })
            .then(function (response) {
                this.setState({
                    activeNote: this.state.notes.find(function (note) {
                        return note.NoteId === noteId;
                    })
                });
            }.bind(this));  
    }

    render() {
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                notes: this.state.notes,
                activeNote: this.state.activeNote,
                onNoteDelete: this.handleNoteDelete,
                onNoteMark: this.handleNoteMark,
                tasksByPriority: this.state.tasksByPriority,
                todaysTasks: this.state.todaysTasks
            })
        });
        return (
            <div>
              <Header />
              <div className="container">
                  {children}
              </div>
            </div>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
