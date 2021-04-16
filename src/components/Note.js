import React, { useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import { removeNote, updateStatus } from '../actions/notes'

// note: {
//     id: uuid(),
//     topic,
//     description,
//     note,
//     reference,
//     tag,
//     status,
//     createdAt
// }

const Note = ({ topic, description, note, reference, tag, createdAt, id, dispatch, status }) => {

    return (
        <div >
            <h3> Topic: {topic} </h3>
            <p>Description: {description} </p>
            <p>Note: {note} </p>
            <p>Reference: {reference} </p>
            <p>Tag: {tag} </p>
            <p>Status: {status}</p>
            <button onClick={() => {
                dispatch(updateStatus(id))
            }}>Change status</button>
            <p>Date: {createdAt} </p>
            <button onClick={() => {
                dispatch(removeNote(id))
            }
            } >Delete</button>
        </div>
    )
}




export default connect()(Note);