import { createSlice } from "@reduxjs/toolkit";

const getInitialMissions = () => {
  try {
    const data = JSON.parse(localStorage.getItem("missions"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const initialState = {
  missions: getInitialMissions(),
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    AddMission(state, action) {
      const { title, desc } = action.payload;
      state.missions.push({
        id: crypto.randomUUID(),
        title,
        desc,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const id = action.payload;
      const m = state.missions.find((mis) => mis.id === id);
      if (m) m.completed = !m.completed;
    },
    edite(state, action) {
      const { id, title, desc } = action.payload;
      const m = state.missions.find((mis) => mis.id === id);
      if (m) {
        m.title = title;
        m.desc = desc;
      }
    },
    deleteMis(state, action) {
      const { id } = action.payload;
      state.missions = state.missions.filter((m) => m.id !== id);
    },
  },
});

export const { AddMission, toggleComplete, edite, deleteMis } =
  MainSlice.actions;

export const MainReducer = MainSlice.reducer;
export const mainSelector = (state) => state.main.missions;
