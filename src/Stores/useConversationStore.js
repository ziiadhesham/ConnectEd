import { create } from "zustand";

const useConversationStore = create((set) => ({
  selectedUserId: null,
  setSelectedUserId: (id) => set({ selectedUserId: id }),
}));

export default useConversationStore;
