import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks,onTaskClick,deleteTask}){
    const navigate = useNavigate();
    function seeDetalisTask(task){
        const query = new URLSearchParams();
        query.set("title",task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`)
    }
    return(
        <ul className="vwList">
            {tasks.map((task) => (
            <li key={task.id} className="elementList">
                <input id={task.id} onClick={() => onTaskClick(task.id)} checked={task.isCompleted} type="checkbox"></input>
                <label htmlFor={task.id}></label>
                <p style={{textDecoration: task.isCompleted && " line-through #4a72bb"}} onClick={()=>seeDetalisTask(task)}>{task.title}</p>
                <button className="trash" onClick={()=> deleteTask(task.id)}><Trash /></button>
            </li>
        ))}
        </ul>
    )
}
export default Tasks;