import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { customAlphabet } from "nanoid";

function ToDoList() {

  const createId = customAlphabet('1234567890',4)


  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTask(newTask);
  }

  function deleteTask(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTask(newTask);
  }

  function addTaskSubmit(title, description) {
    const newTask = {
      id: createId(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTask([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="card-main" >
      <div className="title">
        <h1>Gerenciador de Tarefas</h1>
      </div>
      <AddTask addTaskSubmit={addTaskSubmit} />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />
    </div>
  );
}

export default ToDoList;
