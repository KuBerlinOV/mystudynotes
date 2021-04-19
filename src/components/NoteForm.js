import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import moment from 'moment';
import { addNote } from '../actions/notes';
import AddNote from './AddNote';
import AddNoteModal from './AddNote';
import { Link } from 'react-router-dom';


//moment 
const now = moment().format('MMMM Do YYYY, h:mm:ss a');


const NoteForm = (props) => {
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
            <button onClick={handleModal}> <Link to='/notes/addnote'>Create Note</Link></button>
            <AddNote trigger={showModal} />

        </div>
    )
}




export default connect()(NoteForm)