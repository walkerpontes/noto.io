import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function Notas() {
    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes"))|| []);

    const data = new Date();
    const dataformatada = 
    `${String(data.getDate()).padStart(2,'0')}/${String(data.getMonth()).padStart(2,'0')}/${String(data.getFullYear())}`


    const addNotes = (text) =>{
        const newNote = {
            id: notes.length+1,
            text: text,
            date:dataformatada
        }
        
        setNotes([newNote,...notes])
    }


    const removeNote = (idNote) => {
        const newNote = notes.filter((note) =>  note.id !== idNote);
        setNotes(newNote);
    }

    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes))
    },[notes])


    return (
        <div className="nt-main" >
            <div className="title-nt">
                <h1>Notas</h1>
            </div>
            <AddNote addNotes = {addNotes} />
            <Notes notes = {notes} removeNote = {removeNote}/>
        
        </div>
    )
    
}
export default Notas;