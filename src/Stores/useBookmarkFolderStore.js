import { create } from "zustand";

const useBookmarkFolderStore = create((set) => ({
  selectedFolderId: null,
  setSelectedFolderId: (id) => set({ selectedFolderId: id }),
}));

export default useBookmarkFolderStore;
