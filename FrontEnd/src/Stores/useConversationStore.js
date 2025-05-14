import { create } from "zustand";
import { persist } from "zustand/middleware";

const useConversationStore = create(
  persist(
    (set) => ({
      selectedUserId: null,
      setSelectedUserId: (userId) => set({ selectedUserId: userId }),
    }),
    { name: "conversation-store" }
  )
);

export default useConversationStore;
