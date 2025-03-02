import React from 'react';

const Task = ({ dayTasks = [] }) => {
    if (!Array.isArray(dayTasks)) {
        return null;
    }

    return (
        <div className='min-h-16 '>
            {dayTasks.length > 0 && (
                <ul className="text-sm mt-1 font-bold ">
                    {dayTasks.slice(0, 2).map((task, i) => (
                        <li
                            key={i}
                            className={`py-1 ${task[1] ? "line-through opacity-50 " : ""}`}
                        >
                            • {task[0]}
                        </li>
                    ))}
                    {dayTasks.length > 2 && (
                        <li className="">
                            +{dayTasks.length - 2} more...
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Task;