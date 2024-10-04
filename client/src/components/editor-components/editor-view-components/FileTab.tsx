/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

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
  const [ACTIVE_TAB, setActive] = useState(false);
  return (
    <div className="monaco-file-tab align-row clickable" key={path}>
      <div className="center-div">
        <img src={img_uri[tab_file_type]} css={tabImgStyle} />
      </div>
      <div className="clickable center-div title-nowrap" style={{ paddingRight: "1em" }}>
        <span>{title}</span>
      </div>
      <div className="monaco-tab-close center-div clickable">
        <div className="center-div" css={closeContainerStyle}>
          <img src="https://img.icons8.com/?size=100&id=OZuepOQd0omj&format=png&color=000000" alt="close tab" />
        </div>
      </div>
    </div>
  );
};

export default FileTab;
