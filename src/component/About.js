import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/Notes/notesContext'

const About = () => {
  const user = useContext(NoteContext)
  
  useEffect(() => {
    return () => {
      user.update(2000);
    }
    // eslint-disable-next-line
  }, []);
  
  
  return (
    <div>
      <h2>Hello My Name is {user.state.name} and I'm in {user.state.class} Class</h2>
    </div>
  )
}

export default About;
