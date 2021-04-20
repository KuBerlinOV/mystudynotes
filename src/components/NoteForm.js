import React from 'react';
import Modal from 'react-modal';

const NoteForm = ({ showModal, handleModal, handleSubmit, handleChange, topic, description, note, reference, tag, error }) => {


    //local states



    return (
        <div>
            <Modal isOpen={showModal} onRequestClose={handleModal} >
                <div><h3 color="red">Note</h3>
                    <form onSubmit={handleSubmit} action="">
                        <h3>Topic:</h3>
                        <input type="text" placeholder="topic" name="topic" autoFocus value={topic} onChange={handleChange} />
                        <h3>Description</h3>
                        <input type="text" placeholder="description" name="description" id="" value={description} onChange={handleChange} />
                        <h3>Note</h3>
                        <textarea placeholder="write your note here" name="note" id="" cols="30" rows="10" value={note} onChange={handleChange} ></textarea>
                        <h3>Reference</h3>
                        <input type="text" placeholder="reference" name="reference" id="" value={reference} onChange={handleChange} />
                        <h3>Tag</h3>
                        <input type="text" placeholder="tag" name="tag" value={tag} onChange={handleChange} />

                        <div>
                            {error && <p>Please provide topic and description</p>}
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}




export default NoteForm