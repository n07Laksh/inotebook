import React, { useState } from 'react'
import NoteContext from "./notesContext";

const NoteState = (props) =>{
    const userDetails = {
        "name":"Laksh",
        "class":"12th"
    }
    const [state, setState] = useState(userDetails)
    const update = (time) => {
        setTimeout(() => {
            setState({
                "name":"LaxmiLal",
                "class":"BSc 3year"
            })
          },time)
        
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


