/** @jsxImportSource @emotion/react */

import React from "react";
import ExplorerOption from "../editor-components/explorer-components/explorer-options-components/ExplorerOption";
import { TreeFolder } from "../editor-components/explorer-components/tree-view-components/TreeItem";
import TreeView from "../editor-components/explorer-components/tree-view-components/TreeView";
import { css } from "@emotion/react";

interface PropTypes {
  project_title: string;
}

const items = [
  { title: "index.html", file_type: "html" },
  { title: "style.css", file_type: "css" },
  { title: "script.js", file_type: "js" },
  { title: "blank.txt", file_type: "txt" },
];

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

const folder_url: string = "https://img.icons8.com/ios-filled/50/228BE6/folder-invoices--v2.png";

const ExplorerContainer: React.FC<PropTypes> = ({ project_title }) => {
  return (
    <div className="explorer-container">
      <div className="clickable align-row" css={explorerDetailsStyle}>
        <div className="project-title center-div ">
          <span>{project_title}</span>
        </div>
        <div className="clickable align-row" css>
          <ExplorerOption label="Add File" img_src="https://img.icons8.com/?size=100&id=94127&format=png&color=228BE6" />
          <ExplorerOption label="Add Folder" img_src="https://img.icons8.com/ios-filled/50/228BE6/add-folder--v1.png" />
        </div>
      </div>
      <TreeView>
        <TreeFolder title="src" img_src={folder_url} items={items}>
          <TreeFolder title="assets" img_src={folder_url} items={items}>
            <TreeFolder title="test" img_src={folder_url} items={items}></TreeFolder>
          </TreeFolder>
        </TreeFolder>
        <TreeFolder title="components" img_src={folder_url} items={items}></TreeFolder>
        <TreeFolder title="api" img_src={folder_url} items={items}></TreeFolder>
      </TreeView>
    </div>
  );
};

export default ExplorerContainer;
