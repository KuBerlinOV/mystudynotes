import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { Link } from 'react-router-dom';

//moment 
const now = moment().format('MMMM Do YYYY, h:mm:ss a');


const NoteForm = (props) => {


    //local states
    const [state, setState] = useState({
        topic: props.noteBeforeUpdate ? props.noteBeforeUpdate.topic : '',
        description: props.noteBeforeUpdate ? props.noteBeforeUpdate.description : '',
        note: props.noteBeforeUpdate ? props.noteBeforeUpdate.note : '',
        reference: props.noteBeforeUpdate ? props.noteBeforeUpdate.reference : '',
        tag: props.noteBeforeUpdate ? props.noteBeforeUpdate.tag : '',
        createdAt: props.noteBeforeUpdate ? moment(props.noteBeforeUpdate.createdAt) : now.valueOf(),
        error: false
    });



    //handlers 
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }


    const handleSubmit = (e) => {
        if (!state.topic || !state.description) {
            setState({ error: true })
        } else {
            setState({ error: false })

            //this is the props with the local state.
            //This local state then passed with the props
            // to notes component where the action 'ADD_NOTE' is dispatched with this local state
            props.handleSubmit(state)
        }
        e.preventDefault();
    }

    return (
        <div>
            <Modal isOpen={props.showModal} onRequestClose={props.handleModal} >
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




export default NoteForm