import React from 'react';
import NotesList from './NotesList'
import Note from './Note';
import NotesListFilters from './NotesListFilters';



const Notes = ({ info }) => {


    return (
        <div>
            <ul>
                <h1>My notes: </h1>
                <NotesListFilters />
                <NotesList />
            </ul>
        </div>
    )
}

export default Notes