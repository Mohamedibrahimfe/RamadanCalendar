import { useSelector } from "react-redux";
import React from "react";
import DayCard from "../components/Calendar/DayCard";
import { PageTransition, CardTransition } from "../components/shared/PageTransition";

const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, i) => {
    const startDate = new Date("2025-03-01");
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    return day;
  });
  
  const tasks = useSelector((state) => state.calendar.tasks);

  return (
    <PageTransition>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 p-4">
        {days.map((day, index) => {
          const formattedDay = day.toISOString().split('T')[0];
          const dayTasks = tasks[formattedDay] || [];

          return (
            <CardTransition key={index} delay={index * 0.05}>
              <div className="p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200  text-gray-800 dark:text-gray-200 cursor-pointer bg-white dark:bg-gray-800">
                <DayCard 
                  day={formattedDay} 
                  dayNumber={day.getDate()}
                  dayTasks={dayTasks} 
                />
              </div>
            </CardTransition>
          );
        })}
      </div>
    </PageTransition>
  );
};

export default Calendar;
