import React, { useState } from 'react'
import NoteContext from "./notesContext";
import { confirmAlert } from 'react-confirm-alert'; // Import

const NoteState = (props) => {
    const host = "http://localhost:8000";
    const utilizedNotes = [];
    const [notes, setNotes] = useState(utilizedNotes)

    // get all Notes
    const getNote = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjk4NWIxMjY4MGI0ZWQ0YjFhMmQwIn0sImlhdCI6MTY4MjQ0MDc4Nn0.8pKisneBzljBSUlM_b6QXyATHNruEeeMuJc8x42MxJE",
            }
        });
        const json = await response.json();
        setNotes(json)
    }

    // add notes function
    const addNote = async (title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjk4NWIxMjY4MGI0ZWQ0YjFhMmQwIn0sImlhdCI6MTY4MjQ0MDc4Nn0.8pKisneBzljBSUlM_b6QXyATHNruEeeMuJc8x42MxJE",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    };

    // edit & update notes function
    const editNote = async (id, title, description, tag) => {
        // API Call 
       await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjk4NWIxMjY4MGI0ZWQ0YjFhMmQwIn0sImlhdCI6MTY4MjQ0MDc4Nn0.8pKisneBzljBSUlM_b6QXyATHNruEeeMuJc8x42MxJE",
                
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes));
        // logic to edit and update a note
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    // delete notes function
    const deleteNote = async (id, showAlert) => {
        // API Call
        await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjk4NWIxMjY4MGI0ZWQ0YjFhMmQwIn0sImlhdCI6MTY4MjQ0MDc4Nn0.8pKisneBzljBSUlM_b6QXyATHNruEeeMuJc8x42MxJE",
            }
        })
        // const json = await response.json();
        const newNote = notes.filter(note => note._id !== id)
        setNotes(newNote)
        showAlert("Note Deleted Successfully", "success");
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNote, confirmAlert }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


