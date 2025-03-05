import { useDispatch, useSelector } from "react-redux";
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
  const language = useSelector((state) => state.language.language);

  return (
    <div
      className="min-w-[150px] w-full text-gray-500"
      onClick={handleDayClick}
    >
      <div className="today">
        {dayNumber === today ? <small className={`${language === "ar" ? " text-xs text-lime-50  float-left ml-7 bg-indigo-700 rounded p-1" : " text-xs text-lime-50  float-right  bg-indigo-700 rounded p-1"}`}
        >Today</small> : null}
      </div>
      <p className={`text-lg font-semibold ${isPastDay ? "line-through opacity-50" : ""} ${language === "ar" ? "text-right ml-3" : "text-left ml-3"}`}>
        {language === "ar" ? `يوم ${dayNumber}` : `Day ${dayNumber}`}
      </p>
      <Task dayTasks={dayTasks} />
    </div>
  );
};

export default DayCard;