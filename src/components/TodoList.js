import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, setTodos, filteredTodos, setInputEstimated, inputEstimated } =
    props;

  return (
    <>
      {todos.length === 0 ? (
        <div className="flex">
          <h2 className="text-black m-auto mt-6">No Tasks</h2>
        </div>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
              setInputEstimated={setInputEstimated}
              inputEstimated={inputEstimated}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
