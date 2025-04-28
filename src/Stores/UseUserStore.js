import { create } from 'zustand';

const useUserStore = create((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
  clearUserId: () => set({ userId: null }),
}));

export default useUserStore;
