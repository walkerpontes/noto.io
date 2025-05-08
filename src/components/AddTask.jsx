import { useState } from "react";



function AddTask ({addTaskSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const add = () => {
        if(!title.trim() || !description.trim()){

            alert("Adicione um titulo e uma descricao valida")

        }else{

            addTaskSubmit(title,description);
            
        }

        setTitle("")
        setDescription("")
     }


        return(

    
            <div className="container-task">
                <h1>Adicionar Task</h1>
                <input type="text" name="title" id="title" placeholder="Title" autoComplete="off" value= {title} onChange={(e)=> setTitle(e.target.value)}/>
                <input type="text" name="description" id="description" placeholder="Description" autoComplete="off" value={description} onChange={(e)=> setDescription(e.target.value)} />
                <button type="button" onClick={add}>Adicionar</button>
            </div>
        )
    }


export default AddTask;