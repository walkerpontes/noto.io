import { ChevronLeft } from "lucide-react";
import { useState } from "react";

function AddNote({addNotes}) {

    const[text,setText]= useState("");
    return(
        <div className="card-nt">
            <input type="text" placeholder="Adicione um nota..." autoComplete="off" value={text} onChange={(e)=> setText(e.target.value)}/>

            <div className="addNoteIcon" onClick={()=> {
                addNotes(text);
                setText("");
                
                }}><ChevronLeft/></div>
        </div>  
    )
}

export default AddNote;