import React from "react";
import { useState } from "react";
import NoteDisplay from "../create-note/NoteDisplay";
import ViewNote from "../viewAddNote/ViewNote";
import AddNote from "../viewAddNote/AddNote";
const { uuid } = require("uuidv4");



export default function MarkdownInput() {
  const [titleData, setTitleData] = useState();
  const [contentData, setContentData] = useState();

  const [dataList, setDataList] = useState([
    { title: "course", content: "farine,eau,confiture", id: uuid() },
    {
      title: "notepad",
      content:
        "vraiment trop nul",
      id: uuid(),
    },
    { title: "titre", content: "blabla", id: uuid() },
  ]);

  const onChangeTitle = (e) => {
    setTitleData(e.target.value);
  };

  const onChangeContent = (e) => {
    setContentData(e.target.value);
  };

  const deleteNote = (id) => {
    // console.log(id)
    const filterState = dataList.filter((item) => {
      return item.id !== id;
    });
    setDataList(filterState);
    console.log(filterState);
  };

  const addNote = (e) => {
    e.preventDefault();
    const newArr = [...dataList];

    const newNote = {};
    newNote.title = titleData;
    newNote.content = contentData;
    newNote.id = uuid();

    newArr.push(newNote);
    setDataList(newArr);
    setTitleData("");
    setContentData("");
    // console.log(newArr);
  };

  const handle = () => {
  
    dataList.forEach((e) =>{
      localStorage.setItem("titleNote", (e.title));
      localStorage.setItem("contentNote", (e.content));
      console.log(e)
    })
  };
const itemStoragesTitle = localStorage.getItem("titleNote")
const itemStorageContent = localStorage.getItem("contentNote")
  console.log({ dataList });
   console.log(itemStoragesTitle)
   console.log(itemStorageContent)

  return (
    <div className="container-fluid d-flex">
      <div className="d-flex flex-column justify-content-center align-items-center col-6 border-right border-white">
        <AddNote />

        <ul className="listNote">
         
         <li>
         {
            itemStoragesTitle
          }
          <br/>
          {
            itemStorageContent
          }
         </li>
          {dataList.map((item, index) => {
            
            return (
              <ViewNote
              title={item.title}
              content={item.content}
              key={item.id}
              id={item.id}
              functionDelete={deleteNote}
              />
              
              );
            })}
        </ul>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center col-6 ">
        <NoteDisplay inputTitle={titleData} inputContent={contentData} />

        <form
          onSubmit={(e) => addNote(e)}
          className="d-flex flex-column m-4 w-100"
        >
          <input
            type="text"
            placeholder="Titre"
            className="mb-4 form-control"
            onChange={onChangeTitle}
            value={titleData}
          />

          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Contenu de ma note"
            onChange={onChangeContent}
            className="form-control"
            value={contentData}
          ></textarea>

          <button onClick={handle} className="btn btn-danger mt-4">
            Sauvegarder
          </button>
        </form>
      </div>
    </div>
  );
}
