import { useDispatch } from "react-redux";
import { toggleDayModal } from "../../redux/calendarSlice";
import React from "react";
import Task from "./Task";

const DayCard = ({ day, dayNumber, dayTasks }) => {
  const dispatch = useDispatch();
  const today = new Date().getDate();

  const isPastDay = dayNumber < today;

  const handleDayClick = () => {
    if (dayNumber < today) {
      alert("You cannot edit past days!");
      return;
    }
    dispatch(toggleDayModal({ day }));
  };

  return (
    <div
      className={`min-w-[150px] w-full text-gray-500  ${dayNumber === today ? "today" : ""}`}
      onClick={handleDayClick}
    >
      <p className={`text-lg font-semibold ${isPastDay ? "line-through opacity-50" : ""}`}>
        Day {dayNumber}
      </p>
      <Task dayTasks={dayTasks} />
    </div>
  );
};

export default DayCard;