/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface PropTypes {
 label: string;
 img_src?: string;
}

const optionStyle = css`
 gap: 0.375em;
 align-items: center;
 padding-right: 0.25em;
 & > img {
  width: 1.25em;
  height: 1.25em;
  transform: scale(0.875);
 }
`;

const ExplorerOption: React.FC<PropTypes> = ({ label, img_src }) => {
 return (
  <div className="clickable center-div" css={optionStyle} data-action-type="add-file">
   <img src={img_src} />
  </div>
 );
};

export default ExplorerOption;
