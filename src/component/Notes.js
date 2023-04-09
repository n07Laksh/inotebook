import React, { useContext } from 'react'
import NoteContext from '../context/Notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes} = context;
  return (
    <>
    <AddNote />
    <div className='row'>
      {notes.map((note) => {
        return <NoteItem key={note._id.$oid} note={note} />;
      })}
    </div>
    </>
  )
}

export default Notes
