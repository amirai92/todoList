import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, setTodos, filteredTodos } = props;

  return (
    <ul className=" ">
      {filteredTodos.map((todo, index) => (
        <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
