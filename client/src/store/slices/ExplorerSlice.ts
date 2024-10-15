import { createSlice } from "@reduxjs/toolkit";

interface FileProps {
  path: string;
  title: string;
  file_type: string;
  img_src?: string;
  items? : undefined
}

interface FolderProps {
  path: string;
  title: string;
  dirEntries: Map<string, FileProps | FolderProps>;
  img_src: string ;
}

interface StateProps {
  rootDir: Map<string, FileProps | FolderProps>;
}

const initialState: StateProps = {
  rootDir: new Map(),
};

const ExplorerSlice = createSlice({
  name: "explorerSlice",
  initialState,
  reducers: {
    createFile(state, { payload }) {
      const { path, title, file_type }: FileProps = payload;
      const fileItem = { title, file_type, path };
      state.rootDir.set(title, fileItem);
    },

    addItemToRootDir(state, { payload }) {
      const { path, child, childPath, childType }: { path: string; child: FileProps | FolderProps; childPath: string; childType: string } = payload;
      const dir = state.rootDir.get(path);
      if (!dir) return;
      if (childType === "file") {
        state.rootDir.set(path, child);
        return;
      }
      if (childType === "folder") {
        state?.rootDir.set(childPath, child);
      }
    },
  },
});

export const { createFile, addItemToRootDir } = ExplorerSlice.actions;
export default ExplorerSlice.reducer;
