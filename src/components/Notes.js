import React from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import NoteForm from './NoteForm';



const Notes = ({ info }) => {


    return (
        <div>
            <section>

                <NotesListFilters />
                <h1>My notes: </h1>
                <NoteForm />
                <NotesList />
            </section>
        </div>
    )
}

export default Notes