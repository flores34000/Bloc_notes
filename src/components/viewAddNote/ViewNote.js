import React from "react";
// import AddNote from "./AddNote";
// import MarkdownInput from "../create-note/MarkdownInput";
// import NoteDisplay from "../create-note/NoteDisplay";
import { useState } from "react";


export default function ViewNote(props) {
    
    const [toggle, setToggle] = useState(true)
    
    const changeState= (e) =>{
        setToggle(!toggle)
    }



  return (
    <li 
    className={toggle ?" d-flex justify-content-between align-items-center p-2 m-2 liNote": "border d-flex flex-column justify-content-between  p-2 m-2 liNote animated" }
    onClick={changeState}
    >
      <div className="p-3">
        <h6 className="text-danger">{props.title}</h6>
        <p>{props.content}</p>
      </div>
      
      <button
        onClick={() => props.functionDelete(props.id)}
        className={toggle ? "btn btn-danger p-1 btnNone": "btn btn-danger p-1 "}
      >
        supprimer
      </button>
    </li>
  );
}
