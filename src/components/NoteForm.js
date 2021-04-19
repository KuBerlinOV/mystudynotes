import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import moment from 'moment';
import { addNote } from '../actions/notes'

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
            <button onClick={handleModal} >Create Note</button>
            <Modal isOpen={showModal} onRequestClose={handleModal} >
                <div><h3 color="red">Note</h3>
                    <form onSubmit={handleSubmit} action="">
                        <h3>Topic:</h3>
                        <input type="text" placeholder="topic" name="topic" autoFocus value={state.topic} onChange={handleChange} />
                        <h3>Description</h3>
                        <input type="text" placeholder="description" name="description" id="" value={state.description} onChange={handleChange} />
                        <h3>Note</h3>
                        <textarea placeholder="write your note here" name="note" id="" cols="30" rows="10" value={state.note} onChange={handleChange} ></textarea>
                        <h3>Reference</h3>
                        <input type="text" placeholder="reference" name="reference" id="" value={state.reference} onChange={handleChange} />
                        <h3>Tag</h3>
                        <input type="text" placeholder="tag" name="tag" value={state.tag} onChange={handleChange} />



                        <div>
                            {state.error && <p>Please provide topic and description</p>}
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}




export default connect()(NoteForm)