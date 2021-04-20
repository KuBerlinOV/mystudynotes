import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';



const EditNote = (props) => {
    return (
        <div>
            <NoteForm
                editnote={props.note}
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