import React, { useState, useContext } from 'react'
import NoteContext from '../context/Notes/notesContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const inputChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    
    return (

        <div className='container my-3'>
            <h3>Add Notes</h3>
            <form className="w-50">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' className="form-control" id="title" aria-describedby="emailHelp" onChange={inputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' className="form-control" id="description" onChange={inputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" name='tag' className="form-control" id="tag" onChange={inputChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
            </form>
            <h3 className='mt-3'>Your Notes</h3>
        </div>
    )
}

export default AddNote
