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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 *text-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -100 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 }, x: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-semibold mb-4">
          Customize Day {expandedDay + 1}
        </h2>

        <ul className="mb-2">
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className={`flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md my-2 ${
                        task[1] ? "line-through" : ""
                    }`}
                >
                    {task[0]}
                    <div>
                        <button
                            className="text-red-500 hover:text-red-700 cursor-pointer mx-2"
                            onClick={() => handleDeleteTask(index)}
                        >
                            ❌
                        </button>
                        <button
                            className="text-green-500 hover:text-green-700 cursor-pointer"
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
            className="flex-1 p-2 border rounded-lg dark:bg-gray-700"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white cursor-pointer px-3 py-2 rounded-lg flex"
          >
            Add
          </button>
        </div>

        <button
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg"
          onClick={handleClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default DayModal;
