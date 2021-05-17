import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Select from "./components/Select";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputEstimated, setInputEstimated] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    (() => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodo = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodo);
      }
    })();
  }, []);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

    (() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    })();
  }, [todos, status]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="font-sans	text-white border rounded w-screen h-screen p-5">
      <div className="flex">
        <h1 className="m-auto text-5xl mb-5 text-black">To Do List</h1>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <div className="flex">
        <Select handleStatus={handleStatus} />
      </div>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        inputEstimated={inputEstimated}
        setInputEstimated={setInputEstimated}
      />
    </div>
  );
};

export default App;
