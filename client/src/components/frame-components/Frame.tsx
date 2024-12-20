/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";

const frameStyle = css`
  position: relative;
  display: flex;
  width: 35vw;
  background-color: rgb(255, 255, 255);
`;
const Frame: React.FC = () => {
 
  return (
    <div className="code-output-frame" css={frameStyle}>
      <iframe className="output-iframe no-border" title="output"></iframe>
    </div>
  );
};

export default Frame;
