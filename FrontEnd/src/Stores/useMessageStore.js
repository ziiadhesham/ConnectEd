import { create } from "zustand";

// src/store/useMessageStore.js


 const useMessageStore = create((set) => ({
  messages: [], // Initially an empty array of messages
  addMessage: (newMessage) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          avatarSrc: "https://i.pravatar.cc/150?img=3", // Placeholder avatar
          name: "Kohaku", // Placeholder name
          time: new Date().toLocaleTimeString(), // Current time
          message: newMessage,
        },
      ],
    })),
}));
export default useMessageStore;
