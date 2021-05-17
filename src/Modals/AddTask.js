import React, { useState } from "react";

const getUniqueNumber = () => Date.now();

const AddTask = (props) => {
  const { modeAddTodo, setModeAddTodo, setTodos, todos } = props;

  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (true) {
      setTodos([
        ...todos,
        {
          text: text,
          description: desc,
          completed: false,
          date: new Date().toISOString().slice(0, 10),
          estimatedDate: newDate,
          id: getUniqueNumber(),
        },
      ]);
    }
    setText("");
    setDesc("");
    setNewDate("");
    setModeAddTodo(false);
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ visibility: modeAddTodo ? "visible" : "hidden" }}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity "
          aria-hidden="true"></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
          {/* background-color content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2 mb-5">
                  <h3
                    className="text-3xl leading-6 font-medium text-gray-900"
                    id="modal-title">
                    <span className="text-black">Add New Task</span>
                  </h3>
                </div>
                <div className="mt-8">
                  <input
                    placeholder=" I Want to..."
                    value={text}
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    className="w-full text-black text-base border-2 rounded mb-4"
                    required
                  />
                  <textarea
                    cols="20"
                    rows="3"
                    wrap="hard"
                    maxLength="100"
                    placeholder=" Enter Description"
                    value={desc}
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full resize-none text-black border-2 text-base rounded mt-1"
                  />
                  <div className="mt-1">
                    <label className="text-black">
                      Due Date:
                      <input
                        value={newDate}
                        type="date"
                        onChange={(e) => setNewDate(e.target.value)}
                        className="w-full text-black text-base border-2 rounded mt-1 mb-4 "
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* background-color footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSubmitTodo}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Create
            </button>
            <button
              onClick={() => setModeAddTodo(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
