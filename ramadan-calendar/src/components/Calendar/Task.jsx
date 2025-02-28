import React from 'react';

const Task = ({ dayTasks = [] }) => {
    if (!Array.isArray(dayTasks)) {
        return null;
    }

    return (
        <div className='min-h-16'>
            {dayTasks.length > 0 && (
                <ul className="text-sm mt-1 text-gray-700 dark:text-gray-200">
                    {dayTasks.slice(0, 2).map((task, i) => (
                        <li 
                            key={i} 
                            className={`py-1 ${task[1] ? "line-through opacity-50" : ""}`}
                        >
                            • {task[0]}
                        </li>
                    ))}
                    {dayTasks.length > 2 && (
                        <li className="text-gray-500 dark:text-gray-400">
                            +{dayTasks.length - 2} more...
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Task;