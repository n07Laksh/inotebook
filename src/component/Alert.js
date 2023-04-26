import React from 'react'

export default function Alert(props) {
    const changeCase = (word)=>{
        if(word==="danger") word = "error";
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{changeCase(props.alert.type)} </strong> {props.alert.message}
        </div>
    )
}
