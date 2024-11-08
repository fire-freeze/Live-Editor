/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { closeTab } from "../../../store/slices/ExplorerSlice";
import store from "../../../store/store";

const img_uri: { [type: string]: string } = {
  html: "https://img.icons8.com/fluency/48/html-5.png",
  css: "https://img.icons8.com/color/48/css3.png",
  js: "https://img.icons8.com/color/48/javascript--v1.png",
  txt: "https://img.icons8.com/parakeet/48/txt.png",
};

interface PropTypes {
  tab_file_type?: any;
  title?: string;
  path?: string;
}

const fileTabStyle = css`
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  min-width: 5em;
  color: #cbcbcb;
  padding-left: 0.5em;
  padding-right: 0.5em;
  gap: 0.25em;
  width: 150%;
  width: fit-content;
  & :hover {
    & > .monaco-tab-close {
      display: flex;
      background-color: red;
    }
  }
`;

const closeContainerStyle = css`
  height: 55%;
  border-radius: 5px;
  width: 1.25em;
  &:hover {
    background: #613a3a;
  }
`;

const tabImgStyle = css`
  height: 1.25em;
  width: 1.25em;
`;

const FileTab: React.FC<PropTypes> = ({ title, tab_file_type, path }) => {

  const tabCloseHandler = () => store.dispatch(closeTab(path));
  return (
    <div className="monaco-file-tab align-row clickable" key={path} css={fileTabStyle}>
      <div className="center-div">
        <img src={img_uri[tab_file_type]} css={tabImgStyle} />
      </div>
      <div className="clickable center-div title-nowrap" style={{ paddingRight: "1em" }}>
        <span>{title}</span>
      </div>
      <div className="monaco-tab-close center-div clickable">
        <div className="center-div" css={closeContainerStyle} onClick={tabCloseHandler}>
          <img src="https://img.icons8.com/?size=100&id=NvQ7QXYyF7eO&format=png&color=FFFFFF" alt="close tab" />
        </div>
      </div>
    </div>
  );
};

export default FileTab;
