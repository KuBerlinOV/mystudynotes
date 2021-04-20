import React, { useState } from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import moment from 'moment'
import { addNote } from '../actions/notes';
import { Link } from 'react-router-dom';

//moment 
const now = moment().format('MMMM Do YYYY, h:mm:ss a');





const Notes = (props) => {

    //local states
    const [state, setState] = useState({
        topic: '',
        description: '',
        note: '',
        reference: '',
        tag: '',
        createdAt: now.valueOf(),
        error: false
    });

    const [showModal, setShowModal] = useState(false)

    //handlers 
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleModal = (e) => {
        e.preventDefault();
        setShowModal(!showModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.topic || !state.description) {
            setState({ error: true })
        } else {
            setState({ error: false })
            props.dispatch(addNote(state))
            setShowModal(false)
        }
    }


    return (
        <div>
            <section>

                <NotesListFilters />
                <h1>My notes: </h1>
                <button onClick={handleModal}>Create Note</button>
                <NoteForm
                    showModal={showModal}
                    handleModal={handleModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    topic={state.topic}
                    description={state.description}
                    note={state.note}
                    reference={state.reference}
                    tag={state.tag}
                    error={state.error}
                />
                <NotesList />
            </section>
        </div>
    )
}

export default connect()(Notes)