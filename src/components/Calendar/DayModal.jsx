import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, deleteTask, toggleDayModal } from "../../redux/calendarSlice";
import React, { useState } from "react";

const DayModal = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();
  const expandedDay = useSelector((state) => state.calendar.expandedDay);
  const tasks = useSelector((state) => state.calendar.tasks[expandedDay] || []);

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      dispatch(addTask({ day: expandedDay, task: taskInput }));
      setTaskInput("");
    }
  };

  const handleClose = () => {
    dispatch(toggleDayModal({ day: expandedDay }));
  };
  const handleComplete = (index) => {
    {
      dispatch(completeTask({ day: expandedDay, index }))
    }
  }
  const handleDeleteTask = (index) => {
    dispatch(deleteTask({ day: expandedDay, index }));
  };
  if (expandedDay === null) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg mx-auto p-4 sm:p-6"
      >
        <h2 className="text-xl font-semibold mb-4">
          Customize Day {expandedDay }
        </h2>

        <ul className="mb-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between bg-gray-100 dark:bg-slate-200 p-2 rounded-md my-2 ${task[1] ? "line-through" : ""
                }`}
            >
              {task[0]}
              <div>
                <button
                  className=" cursor-pointer mx-2"
                  onClick={() => handleDeleteTask(index)}
                >
                  ❌
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() => handleComplete(index)}
                >
                  {task[1] ? '↩️' : '✅'}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg dark:bg-slate-200"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 dark:bg-blue-400 text-white cursor-pointer px-3 py-2 rounded-lg flex"
          >
            Add
          </button>
        </div>

        <button
          className="mt-4 w-full bg-red-500 dark:bg-red-400 text-white p-2 rounded-lg cursor-pointer"
          onClick={handleClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DayModal;
