/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";

interface PropTypes {
  children?: React.ReactNode;
}

const treeViewStyle = css`
  width: 100%;
  height: calc(100% - 1.75em);
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: 0.5em;
`;

const TreeView: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className="explorer-tree-view" css={treeViewStyle}>
      <ul>{children}</ul>
    </div>
  );
};

export default TreeView;
