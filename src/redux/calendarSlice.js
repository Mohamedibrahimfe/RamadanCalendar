// ramadan-calendar/src/redux/calendarSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Utility function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("calendarTasks");
    return serializedState ? JSON.parse(serializedState) : { tasks: {} };
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return { tasks: {} };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      tasks: state.tasks,
      expandedDay: state.expandedDay
    });
    localStorage.setItem("calendarTasks", serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};

const initialState = {
  expandedDay: null,
  tasks: {},
  ...loadState()
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasks[day]) {
        state.tasks[day] = [];
      }
      state.tasks[day].push([task, false]);
      saveState(state);
    },
    deleteTask: (state, action) => {
      const { day, index } = action.payload;
      if (state.tasks[day]) {
        state.tasks[day].splice(index, 1);
        if (state.tasks[day].length === 0) {
          delete state.tasks[day];
        }
        saveState(state);
      }
    },
    toggleDayModal: (state, action) => {
      const { day } = action.payload;
      state.expandedDay = state.expandedDay === day ? null : day;
      saveState(state);
    },
    completeTask: (state, action) => {
      const { day, index } = action.payload;
      if (state.tasks[day] && state.tasks[day][index]) {
          state.tasks[day][index][1] = !state.tasks[day][index][1];
          saveState(state);
      }
  }
  },
});

export const { addTask, deleteTask, toggleDayModal, completeTask } = calendarSlice.actions;

export default calendarSlice.reducer;
