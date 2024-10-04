/** @jsxImportSource @emotion/react */

import React from "react";
import EditorView from "../editor-components/editor-view-components/EditorView";
import Frame from "../frame-components/Frame";
import ExplorerContainer from "./ExplorerContainer";
import SashContainer from "./ResizeColumn";
import { css } from "@emotion/react";


const containerStyle = css`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 93vh;
  overflow: hidden;
`

const EditorContainer: React.FC = () => {
  return (
    <div className="editor-container align-row" css={containerStyle}>
      <SashContainer />
      <ExplorerContainer project_title="PROJECT [LIVE]" />
      <EditorView />
      <Frame />
    </div>
  );
};

export default EditorContainer;
