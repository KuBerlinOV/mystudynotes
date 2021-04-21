import React, { useState } from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import NoteForm from './NoteForm';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addNote } from '../actions/notes';





const Notes = (props) => {


    //modal manipulation
    const [showModal, setShowModal] = useState(false)

    const handleModal = (e) => {
        e.preventDefault();
        if (showModal === true) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    return (
        <div>
            <section>
                <NotesListFilters />
                <h1>My notes: </h1>
                <button onClick={handleModal}><Link to='/notes/addnote'>Create Note</Link></button>
                <NoteForm
                    showModal={showModal}
                    handleModal={handleModal}
                    handleSubmit={(note) => {
                        props.dispatch(addNote(note))
                    }}
                />
                <NotesList />
            </section>
        </div>
    )
}

export default connect()(Notes)