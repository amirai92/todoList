import React from "react";
import "../_buttons.css";
const getUniqueNumber = () => Date.now();

const Form = (props) => {
  const {
    setInputText,
    todos,
    setTodos,
    inputText,
    setStatus,
    setInputDescription,
    inputDescription,
  } = props;

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleInputDescription = (e) => {
    setInputDescription(e.target.value);
  };
  const handleSubmitTodo = (e, data) => {
    e.preventDefault();
    if (inputText.length > 0) {
      setTodos([
        ...todos,
        {
          text: inputText,
          description: inputDescription,
          completed: false,
          date: new Date().toLocaleDateString(),
          id: getUniqueNumber(),
        },
      ]);
      setInputText("");
      setInputDescription("");
    }
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="flex justify-center align-center flex-col">
      <div className="flex justify-between mr-5 ml-5">
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="text-xl">Enter task</label>
            <input
              placeholder="Enter task"
              value={inputText}
              name="text"
              type="text"
              onChange={handleInputText}
              className="border-none bg-gray-50 text-black p-2 text-xl w-48	cursor-pointer text-black focus:outline-none sm:text-sm ml-5 rounded-xl"
            />
            <button
              onClick={handleSubmitTodo}
              className="submit-button"
              type="submit">
              {/* Add new task */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          <div className="flex mb-4">
            <label className="text-xl">Description</label>
            <textarea
              cols="20"
              rows="3"
              wrap="hard"
              maxLength="100"
              placeholder="Enter a description"
              value={inputDescription}
              type="text"
              name="description"
              onChange={handleInputDescription}
              className="border-none bg-gray-50 text-black p-2 text-xl w-48	cursor-pointer text-black focus:outline-none sm:text-sm ml-2 rounded-xl"
            />
          </div>
        </div>
        <div>
          <label className="text-xl">Filter</label>
          <div className="flex relative w-52	h-2/6 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <select
              onChange={handleStatus}
              name="todos"
              className="w-48	cursor-pointer text-black focus:outline-none sm:text-sm">
              <option value="all">All Todos</option>
              <option value="completed">Completed Todos</option>
              <option value="uncompleted">Uncompleted Todos</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
