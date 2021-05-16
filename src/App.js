import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    (function () {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodo = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodo);
      }
    })();
  }, []);

  useEffect(() => {
    (function () {
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
    })();

    (function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    })();
  }, [todos, status]);

  return (
    <div className="font-mono text-white bg-blue-300 border rounded w-screen h-screen p-5">
      <header className="flex justify-center align-center h-28 rounded-xl bg-blue-800 mb-8">
        <h1 className="text-7xl mb-10 mt-4">Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        setInputDescription={setInputDescription}
        inputDescription={inputDescription}
      />
      <hr></hr>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
