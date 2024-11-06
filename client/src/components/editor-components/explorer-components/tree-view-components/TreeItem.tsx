import React, { useContext, useState } from "react";
import { modalContext } from "../../../../context/modalContext";
import ContextMenu from "../../../modal-components/ContextMenu";
type FILE_TYPE = "html" | "css" | "js" | "txt";

const img_uri: { [type: string]: string } = {
  html: "https://img.icons8.com/fluency/48/html-5.png",
  css: "https://img.icons8.com/color/48/css3.png",
  txt: "https://img.icons8.com/parakeet/48/txt.png",
  js: "https://img.icons8.com/color/48/javascript--v1.png",
};
interface FilePropTypes {
  title: string;
  children?: React.ReactNode;
  file_type?: string;
  img_src?: string;
}

interface FolderPropTypes {
  title: string;
  children?: React.ReactNode;
  items?: any;
  img_src: string;
}

const ShowContextMenu = (event: React.MouseEvent, modalState: any, updateModalState: any, type: string) => {
  const entries = {
    folderEntries: [
      { label: "Rename", action: () => console.log("RENAMED!") },
      { label: "Delete", action: () => console.log("DELETED!") },
      { label: "New File", action: () => console.log("CREATED NEW FILE!") },
      { label: "New Folder", action: () => console.log("CREATED NEW FOLDER!") },
    ],

    fileEntries: [
      { label: "Rename", action: () => console.log("RENAMED!") },
      { label: "Delete", action: () => console.log("DELETED!") },
    ],
  };

  const menuEntries = type === "folder" ? entries.folderEntries : entries.fileEntries;
  updateModalState({
    ...modalState,
    show_modal: true,
    child: (
      <ContextMenu
        entries={menuEntries}
        position={{ x: event.clientX, y: event.clientY - 21 * (type == "folder" ? entries.folderEntries.length : entries.fileEntries.length) }}
      />
    ),
  });
};

export const TreeFile: React.FC<FilePropTypes> = ({ title }) => {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const file_type: string = title.split(".")[1];
  const { modalState, updateModalState } = context;
  return (
    <li>
      <div
        className="explorer-tree-item clickable"
        data-item-type="file"
        onContextMenu={(event) => {
          event.preventDefault();
          ShowContextMenu(event, modalState, updateModalState, "file");
        }}
      >
        <div className="tree-item-details clickable align-row" draggable={false}>
          <div className="tree-item-img-container align-row">
            <img height={"100%"} width={"100%"} src={img_uri[file_type]} />
          </div>
          <span> {title}</span>
        </div>
      </div>
    </li>
  );
};

export const TreeFolder: React.FC<FolderPropTypes> = ({ items, children, title, img_src }) => {
  const [collapsed, setCollapsed] = useState(false);
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const { modalState, updateModalState } = context;
  return (
    <div className="explorer-tree-item" data-item-type="folder">
      <div
        className="tree-item-details clickable align-row"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          ShowContextMenu(event, modalState, updateModalState, "folder");
        }}
      >
        <div className="tree-item-img-container align-row">
          <img src={img_src} alt="" />
        </div>
        <span> {title}</span>
      </div>

      <ul className={`${collapsed ? "collapsed" : ""}`}>
        {Object.values(items)?.map((item: any, index: number) => {
          return <TreeFile title={item.title} img_src={item.img_src} file_type={item.file_type} key={index} />;
        })}
        {children}
      </ul>
    </div>
  );
};
