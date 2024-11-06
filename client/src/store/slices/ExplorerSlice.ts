import { enableMapSet } from "immer";
import { createSlice } from "@reduxjs/toolkit";

type FILE_TYPE = "html" | "css" | "js" | "txt";
interface FileProps {
  item_type: string;
  path: string;
  title: string;
  file_type?: FILE_TYPE;
  img_src: string;
  parent_path: string;
}

interface FolderProps {
  item_type: string;
  path: string;
  title: string;
  dirEntries: { [path: string]: ItemProps };
  img_src: string;
  parent_path: string;
}

interface ItemProps {
  item_type: string;
  path: string;
  title: string;
  dirEntries?: { [key: string]: ItemProps };
  img_src: string;
  file_type?: FILE_TYPE;
  [key: string]: any;
}

interface StateProps {
  rootDir: { [key: string]: ItemProps };
}

const initialState: StateProps = {
  rootDir: {},
};

const ExplorerSlice = createSlice({
  name: "explorerSlice",
  initialState,
  reducers: {
    createFolder(state, { payload }) {
      const { title, parent_path, img_src }: FolderProps = payload;
      const dir = parent_path === "/" ? state.rootDir : state.rootDir[parent_path];
      const itemPath = parent_path === "/" ? parent_path + title : parent_path + "/" + title;
      const folderItem: FolderProps = { title, parent_path, path: itemPath, item_type: "folder", dirEntries: {}, img_src };
      console.log("DIR: ", dir);
      if (!Object.keys(dir).includes(itemPath)) dir[itemPath] = folderItem;
    },

    createFile(state, { payload }) {
      const { title, file_type, img_src, parent_path }: FileProps = payload;
      const itemPath = parent_path === "/" ? parent_path + title : parent_path + "/" + title;
      const dir = parent_path === "/" ? state.rootDir : state.rootDir[parent_path];
      const fileItem: FileProps = { title, file_type, parent_path, path: itemPath, img_src, item_type: "file" };
      console.log("DIR: ", itemPath);
      if (!Object.keys(dir).includes(itemPath)) dir[itemPath] = fileItem;
    },

    renameFile(state, { payload }) {},
  },
});

export const { createFile, createFolder } = ExplorerSlice.actions;
export default ExplorerSlice.reducer;
