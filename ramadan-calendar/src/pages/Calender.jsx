import { useSelector } from "react-redux";
import React from "react";
import DayCard from "../components/Calendar/DayCard";

const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, i) => {
    const startDate = new Date("2025-03-01");
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    return day;
  });
  
  const tasks = useSelector((state) => state.calendar.tasks);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 p-4">
      {days.map((day, index) => {
        const formattedDay = day.toISOString().split('T')[0];
        const dayTasks = tasks[formattedDay] || [];

        return (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <DayCard 
              day={formattedDay} 
              dayNumber={day.getDate()}
              dayTasks={dayTasks} 
            />
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
