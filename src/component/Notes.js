import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/Notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNote, editNote, confirmAlert } = context;

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })

  const inputChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const title = useRef(null)

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, [])

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    setTimeout(() => {
      title.current.focus();
    }, 500);
    // confirmAlert({
    //   title: 'Edit This Note',
    //   message: 'Are you sure you want this.',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => {}
    //     },
    //     {
    //       label: 'No',
    //     }
    //   ]
    // });
  }

  const handleUpdate = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag );
    closebtn.current.click();
  }
  const ref = useRef(null);
  const closebtn = useRef(null);

  return (
    <>
      <AddNote />

      <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal"></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="form-group">
                  <label htmlFor="etitle">Title</label>
                  <input type="text" name='etitle' ref={title} className="form-control" id="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={inputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="edescription">Description</label>
                  <input type="text" name='edescription' className="form-control" id="edescription" value={note.edescription} onChange={inputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag</label>
                  <input type="text" name='etag' className="form-control" id="etag" value={note.etag} onChange={inputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary d-none" ref={closebtn} data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  )
}

export default Notes
