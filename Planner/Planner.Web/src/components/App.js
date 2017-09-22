import React, { PropTypes } from 'react';
import Header from './common/Header';
import axios from 'axios';
import Notifications, { notify } from 'react-notify-toast';

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
        this.handleNoteFormSumit = this.handleNoteFormSumit.bind(this);
        this.handleTaskClose = this.handleTaskClose.bind(this);
        this.handleTaskFormSubmit = this.handleTaskFormSubmit.bind(this);
    }

    componentDidMount() {

        axios.get('http://localhost:52975/api/note')
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

        axios.get('http://localhost:52975/api/task/priority')
            .then((response) => {
                this.setState({
                    tasksByPriority: response.data
                });
            });

        axios.get('http://localhost:52975/api/task/today')
            .then((response) => {
                this.setState({
                    todaysTasks: response.data
                });
            });
    }

    handleNoteDelete(noteId) {
        axios.delete('http://localhost:52975/api/note/' + noteId)
            .then(function (response) {
                notify.show("Note removed successfully.", "success");
                this.setState({
                    notes: this.state.notes.filter(function (note) { return note.NoteId !== noteId })
                });
            }.bind(this))
            .catch(function (error) {
                notify.show("An error occurd.", "error");
            });  
    }

    handleNoteMark(noteId) {
        axios.put('http://localhost:52975/api/note/mark', { NoteId: noteId })
            .then(function (response) {
                notify.show("Note marked as active successfully.", "success");
                this.setState({
                    activeNote: this.state.notes.find(function (note) {
                        return note.NoteId === noteId;
                    })
                });
            }.bind(this))
            .catch(function (error) {
                notify.show("An error occurd.", "error");
            });  
    }

    handleNoteFormSumit(note) {
        axios.post('http://localhost:52975/api/note', note)
            .then(function (response) {
                notify.show("Note inserted successfully.", "success");
                note.NoteId = response.data;
                this.setState({
                    notes: this.state.notes.concat(note)
                });
                $('#noteModal').modal('hide');
            }.bind(this))
            .catch(function (error) {
                notify.show("An error occurd.", "error");
            });  
    }

    handleTaskClose(taskId) {
        axios.put('http://localhost:52975/api/task/close', {taskId : taskId})
            .then(function (response) {
                notify.show("Task closed successfully.", "success");
                this.setState({
                    tasksByPriority: this.state.tasksByPriority.map((task) => {
                        if (task.TaskId === taskId) {
                            return Object.assign({}, task, {
                                IsCompleted: true
                            });
                        } else {
                            return task;
                        }
                    })
                });
            }.bind(this))
            .catch(function (error) {
                notify.show("An error occurd.", "error");
            });  
    }

    handleTaskFormSubmit(task) {
        axios.post('http://localhost:52975/api/task', task)
            .then(function (response) {
                notify.show("Task inserted successfully.", "success");
                task.TaskId = response.data;
                this.setState({
                    notes: this.state.tasksByPriority.concat(note)
                });
                $('#taskModal').modal('hide');
            }.bind(this))
            .catch(function (error) {
                notify.show("An error occurd.", "error");
            });  
    }

    render() {
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                notes: this.state.notes,
                activeNote: this.state.activeNote,
                onNoteDelete: this.handleNoteDelete,
                onNoteMark: this.handleNoteMark,
                onNoteFormSubmit: this.handleNoteFormSumit,
                tasksByPriority: this.state.tasksByPriority,
                todaysTasks: this.state.todaysTasks,
                onTaskClose: this.handleTaskClose
            })
        });
        return (
            <div>
              <Notifications />
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
