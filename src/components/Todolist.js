import React from "react";
import Todo from "./Todo";


function Todolist ({todos, setTodos}) {


    return(
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => (
              <Todo text={todo.text} key={todo.id} setTodos={setTodos} todo={todo}/>
            ))}
          </ul>
        </div>
    );
};

export default Todolist;