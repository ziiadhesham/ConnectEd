// src/store/sidebarStore.js
import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (value) => set({ sidebarOpen: value }),
}));

export default useSidebarStore;
