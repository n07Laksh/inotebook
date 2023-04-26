import React, { useState, useContext} from 'react'
import NoteContext from '../context/Notes/notesContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note Added Successfully","success");
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
                    <input type="text" value={note.title} name='title' className="form-control" id="title" aria-describedby="emailHelp" onChange={inputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={note.description} name='description' className="form-control" id="description" onChange={inputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" value={note.tag} name='tag' className="form-control" id="tag" onChange={inputChange} />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default AddNote
