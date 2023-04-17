import React, { useRef, useContext } from 'react'
import NoteContext from '../context/Notes/notesContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote, editNote } = context;
    const { note } = props;
    let editForm = useRef("");


    const editableContent = () => {


        let html = `<div class="editableform" style='display:flex;justify-content:center;align-item:center'>
            <form>
                <div class="form-group mt-4">
                    <input type="text" class="form-control" id="title" placeholder="Enter title" />
                </div>
                <div class="form-group my-4">
                    <input type="text" class="form-control" id="description" placeholder="Enter description" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="tag" placeholder="Enter tag" />
                </div>
                <button type="submit" class="mt-2 btn btn-primary float-right">Update</button>
            </form>
        </div>`;

        editForm.current.innerHTML = html;
        
        console.log(editForm)

    }

    return (
        <div className='col-md-3 my-2' >
            <div className="card" >
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">{note.title}</h5>
                        </div>
                        <div ref={editForm} id="editForm" className="editForm"></div>
                        <div>
                            <i title='Edit' className="fa-regular fa-pen-to-square mx-3" onClick={editableContent}></i>
                            <i title='Delete' className="fa-regular fa-trash-can mx-3" onClick={() => deleteNote(note._id)}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
