import React, { useState } from 'react'
import NoteContext from "./notesContext";

const NoteState = (props) => {
    const utilizedNotes = [
        {
            "_id": {
                "$oid": "2"
            },
            "user": {
                "$oid": "641486e2ec9239ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "3"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "4"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            }
        },
        {
            "_id": {
                "$oid": "5"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            }
        },
        {
            "_id": {
                "$oid": "6"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            }
        },
        {
            "_id": {
                "$oid": "7"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            }
        },
        {
            "_id": {
                "$oid": "8"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": "LaxmiLal",
            "description": "From Sraipali",
            "tag": "General",
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            }
        }

    ];
    const [notes, setNotes] = useState(utilizedNotes)

    // add notes function
    const addNote = (title, description, tag) => {
        // todo api call
        const note = {
            "_id": {
                "$oid": "9"
            },
            "user": {
                "$oid": "641486e2ec92c39ffb7fe5e2"
            },
            "title": title,
            "description": description,
            "tag": tag,
            "date": {
                "$date": {
                    "$numberLong": "1679308816849"
                }
            }
        };
        setNotes(notes.concat(note))
    };


    // update notes function
    const updateNote = () => {

    };
    
    // delete notes function
    const deleteNote = (id) => {
        // todo api call
        const newNote = notes.filter(note => note._id !== id)
        setNotes(newNote)
    };
    return (
        <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


