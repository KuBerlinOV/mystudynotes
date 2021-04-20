import React from 'react';
import Modal from 'react-modal';


const EditNote = ({ id, handleModal, showModal }) => {

    return (
        <div>
            <button onClick={handleModal}>Edit</button>
            <Modal isOpen={showModal}>
                <p>{id}</p>
            </Modal>
        </div>
    )
}

export default EditNote;