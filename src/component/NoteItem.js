import React, { useContext } from 'react'
import NoteContext from '../context/Notes/notesContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <>
            <div className='col-md-3 my-2' >
                <div className="card" >
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="card-title">{note.title}</h5>
                            </div>
                            <div>
                                <i title='Edit' className="fa-regular fa-pen-to-square mx-3" onClick={() => updateNote(note)}></i>
                                <i title='Delete' className="fa-regular fa-trash-can mx-3" onClick={() => deleteNote(note._id)}></i>
                            </div>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
