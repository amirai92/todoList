import React, { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";

const Tooltip = ({ todo, color }) => {
  const [tooltipShow, setTooltipShow] = useState(false);
  const btnRef = useRef();
  const tooltipRef = useRef();
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "bottom",
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className={
              "text-white transform hover:scale-110  border p-1 rounded-xl"
            }
            type="button"
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={btnRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div
            className={
              (tooltipShow ? "" : "hidden ") +
              "bg-" +
              "white" +
              " text-black border  block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={tooltipRef}>
            <div>
              <div
                className={
                  "bg-" +
                  "white" +
                  "text-black border font-normal p-3  mb-0 border-b border-solid border-blueGray-100 rounded-t-lg"
                }>
                <span className="mr-2">Task:</span>
                {todo.text}
                <br></br>
                <span className="mr-2 text-xs">Created At: {todo.date}</span>
                <br></br>
                <label className="mr-2 text-xs text-red-500 ">
                  Due Date:
                  <span className="ml-3">{todo.estimatedDate}</span>
                </label>
              </div>
              <div className="p-3">
                <span className="mr-2">Description:</span>
                {todo.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
