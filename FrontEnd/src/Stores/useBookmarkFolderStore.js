import { create } from "zustand";
import { persist } from "zustand/middleware";


const useBookmarkFolderStore = create(
  persist(
    (set) => ({
      selectedFolderId: null,
      setSelectedFolderId: (folderId) => set({ selectedFolderId: folderId }),
    }),
    {
      name: "bookmark-folder",
      getStorage: () => localStorage, 
    }
  )
);


export default useBookmarkFolderStore;
