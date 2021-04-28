import React, { useState } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm'
import moment from 'moment'
import { removeNote, updateStatus } from '../actions/notes'
import { Link } from 'react-router-dom';

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

export const Note = ({ topic, description, note, reference, tag, createdAt, id, dispatch, status }) => {


    return (
        <div>
            <h3> Topic: {topic} </h3>
            <p>Description: {description} </p>
            <p>Note: {note} </p>
            <p>Reference: {reference} </p>
            <p>Tag: {tag} </p>
            <p>Status: {status}</p>
            <button onClick={() => {
                dispatch(updateStatus(id))
            }}>Change status</button>
            <p>Date: {moment(createdAt).format('MMMM Do YYYY, h:mm')} </p>
            <button onClick={() => {
                dispatch(removeNote(id))
            }
            } >Delete</button>
            <button> <Link to={`/edit/${id}`}> Edit</Link></button>
        </div>
    )
}




export default connect()(Note);