/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useContext, useState } from "react";
import store from "../../store/store";
import { createFolder, createFile } from "../../store/slices/ExplorerSlice";
import { modalContext } from "../../context/modalContext";

const img_uri: { [type: string]: string } = {
  folder: "https://img.icons8.com/ios-filled/50/228BE6/folder-invoices--v2.png",
  html: "https://img.icons8.com/fluency/48/html-5.png",
  css: "https://img.icons8.com/color/48/css3.png",
  txt: "https://img.icons8.com/parakeet/48/txt.png",
  js: "https://img.icons8.com/color/48/javascript--v1.png",
};

const containerStyle = css`
  /* background-color: #121111; */
  background-color: #12111126;
  height: 6em;
  width: 20vw;
  min-width: 10em;
  border-radius: 5px;
  border: 1px solid #2c2c2c;
  backdrop-filter: blur(1px);
  filter: drop-shadow(4px 3px 10px black);
`;

const newItemHeaderStyle = css`
  width: 100%;
  height: 3.5em;
  color: white;
  text-align: center;
  padding-top: 0.75em;
`;

const nameInputStyle = css`
  appearance: none;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #cecccc;
  caret-color: wheat;
  background-color: transparent;
  width: 90%;
`;

interface PropTypes {
  item_type: string;
  label: string;
}

const CreateTreeItem: React.FC<PropTypes> = ({ item_type, label }) => {
  const [itemName, setItemName] = useState<string>("");
  const context = useContext(modalContext);
  if (!context) throw new Error("MODAL CONTEXT NOT FOUND");
  const { updateModalState } = context;
  const keydownHandler = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    console.log("ITEM TYPE : ", item_type);
    if (item_type === "file") {
      const file_type: string = itemName.split(".")[1];
      const file_name: string = itemName.split(".")[0];
      // PROPS:  { title, file_type, img_src, parent_path }
      store.dispatch(createFile({ title: itemName, file_type, parent_path: "/", img_src: img_uri[file_type] }));
      console.log("rootDir: ", store.getState().explorerState.rootDir);
    }
    if (item_type === "folder") {
      store.dispatch(createFolder({ title: itemName, parent_path: "/", img_src: img_uri["folder"] }));
      console.log("rootDir: ", store.getState().explorerState.rootDir);
    }
    updateModalState({
      show_modal: false,
    });
  };
  return (
    <div css={containerStyle} className="align-column" onClick={(e) => e.stopPropagation()} onKeyDown={keydownHandler}>
      <div css={newItemHeaderStyle}>{label}</div>
      <div className="center-div">
        <input
          type="text"
          placeholder="Name"
          spellCheck="false"
          css={nameInputStyle}
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CreateTreeItem;
