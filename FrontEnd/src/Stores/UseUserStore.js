import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id) => set({ userId: id }),
      clearUserId: () => set({ userId: null }),
    }),
    {
      name: 'user-store', // name of the key in localStorage
      getStorage: () => localStorage, // or sessionStorage
    }
  )
);

export default useUserStore;
