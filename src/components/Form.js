import React from "react";

const Form = (props) => {
  const { setInputText, todos, setTodos, inputText, setStatus } = props;
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        date: new Date().toLocaleDateString(),
        id: Math.random() * 10000,
      },
    ]);
    setInputText("");
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        placeholder="Enter a todo"
        value={inputText}
        type="text"
        onChange={handleInputText}
        className="todo-input"
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All Todos</option>
          <option value="completed">Completed Todos</option>
          <option value="uncompleted">Uncompleted Todos</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
