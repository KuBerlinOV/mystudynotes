import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { updateNote } from '../actions/notes'


const EditNote = (props) => {
    return (
        <div>
            <NoteForm
                //note before update
                noteBeforeUpdate={props.note}
                //this is handle submit props
                handleSubmit={(note) => {
                    //dispatch action to edit the expense
                    props.dispatch(updateNote(props.note.id, note))
                    props.history.push('/notes')
                    //redirect to dashBoard
                }}
                showModal={true} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find((note) => note.id == props.match.params.id)
    }

}

export default connect(mapStateToProps)(EditNote);