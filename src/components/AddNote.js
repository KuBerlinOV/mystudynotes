import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addNote } from '../actions/notes';
import NoteForm from './NoteForm';

const AddNote = (props) => {

    return (
        <NoteForm
            handleSubmit={(note) => {
                props.dispatch(addNote(note));
                props.history.push('/notes');
            }}
        />
    )
}

export default connect()(AddNote);