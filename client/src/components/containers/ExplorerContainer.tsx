/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import ExplorerOption from "../editor-components/explorer-components/explorer-options-components/ExplorerOption";
import TreeView from "../editor-components/explorer-components/tree-view-components/TreeView";
import { css } from "@emotion/react";
import store from "../../store/store";
import { modalContext } from "../../context/modalContext";
import CreateTreeItem from "../modal-components/CreateTreeItem";
import { TreeFile, TreeFolder } from "../editor-components/explorer-components/tree-view-components/TreeItem";

interface PropTypes {
  project_title: string;
}

const explorerDetailsStyle = css`
  width: 100%;
  height: 1.75em;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5em;
`;

const optionsContainerStyle = css`
  align-items: center;
  gap: 0.375em;
  padding-right: 0.5em;
`;

const ExplorerContainer: React.FC<PropTypes> = ({ project_title }) => {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");

  const { modalState, updateModalState } = context;

  const mouseHandler = (item_type: string, label: string) => {
    const explorerState = store.getState().explorerState;
    updateModalState({
      show_modal: true,
      modal_style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      child: <CreateTreeItem item_type={item_type} label={label} />,
    });
  };

  const entries = Array.from(Object.values(store.getState().explorerState.rootDir));
  console.log("file entries : ", entries);
  return (
    <div className="explorer-container">
      <div className="clickable align-row" css={explorerDetailsStyle}>
        <div className="project-title center-div ">
          <span>{project_title}</span>
        </div>
        <div className="clickable align-row" css>
          <ExplorerOption
            label="Add File"
            img_src="https://img.icons8.com/?size=100&id=94127&format=png&color=228BE6"
            onClick={(event: React.MouseEvent) => mouseHandler("file", "New File")}
          />
          <ExplorerOption
            label="Add Folder"
            img_src="https://img.icons8.com/ios-filled/50/228BE6/add-folder--v1.png"
            onClick={(event: React.MouseEvent) => mouseHandler("folder", "New Folder")}
          />
        </div>
      </div>
      <TreeView>
        {entries.map((item, index) => {
          if (item.item_type === "folder")
            return <TreeFolder title={item.title} items={item?.dirEntries} img_src={item.img_src} path={item.path} key={index} />;
          if (item.item_type === "file") return <TreeFile title={item.title} img_src={item.img_src} path={item.path} key={index} />;
        })}
      </TreeView>
    </div>
  );
};

export default ExplorerContainer;
