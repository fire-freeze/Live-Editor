/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";

const containerStyle = css`
  background-color: #121111;
  height: 6em;
  width: 20vw;
  min-width: 10em;
  border-radius: 5px;
  border: 1px solid #2c2c2c;
`;

const newItemHeaderStyle = css`
  width: 100%;
  height: 3.5em;
  color: white;
  text-align: center;
  padding-top: 0.75em;
`;

const inputDivStyle = css`
  /* width:100%; */

`

const nameInputStyle = css`
    appearance:none;
    border:none;
    outline: none;
    border-radius:5px;
    color:#cecccc;
    caret-color: wheat;
    background-color: transparent;
    width: 90%;
`

interface PropTypes {
  item_type: string;
  label: string;
}

const CreateTreeItem: React.FC<PropTypes> = ({ item_type, label }) => {
  const keydownHandler = () => {

  }
  return (
    <div css={containerStyle} className="align-column" onClick={e => e.stopPropagation()} onKeyDown={keydownHandler}>
      <div css={newItemHeaderStyle}>{label}</div>
      <div className="center-div" ><input type="text" placeholder="Name" spellCheck="false" css={nameInputStyle}/></div>
    </div>
  );
};

export default CreateTreeItem;
