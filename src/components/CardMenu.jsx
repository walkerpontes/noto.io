import { useState } from "react";
import ToDoList from "../ToDoList";
import Notas from "../Notas";

function CardMenu() {
  const [componentAtual, setComponentAtual] = useState("todo");

  const render = () => {
    switch (componentAtual) {
      case "todo":
        return <ToDoList />;
      case "notas":
        return <Notas />;
      default:
        return <Notas />;
    }
  };
  return (
    <div className="card">
      <div className="card-left">
        <div className="menu-slide">
          <h1 id="menu-slide-title">Noto.io</h1>
        </div>
        <ul>
          <li onClick={() => setComponentAtual("todo")}>
            <span id="textList">To do List</span>
          </li>
          <li onClick={() => setComponentAtual("notas")}>
            <span id="textNote">Notas</span>
          </li>
        </ul>
      </div>

      {render()}
    </div>
  );
}
export default CardMenu;
