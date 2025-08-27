import { create } from "zustand";

export const sessionsStore = create((set) => ({
  sessions: [],
}));
