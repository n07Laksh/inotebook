import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/Notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, getNote} = context;

    useEffect(() => {
      getNote();
    }, [])
    
  return (
    <>
    <AddNote />
    <div className='row'>
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
    </>
  )
}

export default Notes
