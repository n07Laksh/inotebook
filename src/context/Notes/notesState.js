import React, { useState } from 'react'
import NoteContext from "./notesContext";

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
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDg2ZTJlYzkyYzM5ZmZiN2ZlNWUyIn0sImlhdCI6MTY3OTA2Njg1MH0.lwSpu5MAMh3jOdRWLqohjioii9zhotXNo7z2MMrRueE",
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
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDg2ZTJlYzkyYzM5ZmZiN2ZlNWUyIn0sImlhdCI6MTY3OTA2Njg1MH0.lwSpu5MAMh3jOdRWLqohjioii9zhotXNo7z2MMrRueE",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        setNotes(notes.concat(json))
    };

    // edit & update notes function
    const editNote = async (id, title, description, tag) => {
        console.log(id, title, description, tag)
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDg2ZTJlYzkyYzM5ZmZiN2ZlNWUyIn0sImlhdCI6MTY3OTA2Njg1MH0.lwSpu5MAMh3jOdRWLqohjioii9zhotXNo7z2MMrRueE",
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = await response.json();

        // logic to edit and update a note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    };

    // delete notes function
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDg2ZTJlYzkyYzM5ZmZiN2ZlNWUyIn0sImlhdCI6MTY3OTA2Njg1MH0.lwSpu5MAMh3jOdRWLqohjioii9zhotXNo7z2MMrRueE",
            }
        })
        const json = await response.json();
        const newNote = notes.filter(note => note._id !== id)
        // console.log(json)
        setNotes(newNote)
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


