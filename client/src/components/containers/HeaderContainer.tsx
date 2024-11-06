import React from "react";

interface PropTypes {
  children?: React.ReactNode;
  height?: string;
}

const HeaderContainer: React.FC<PropTypes> = ({ children, height }) => {
  return (
    <div className="header-container center-div" style={{ height }}>
      <header>
        {children}
        <span>LIVE EDITOR</span>
      </header>
    </div>
  );
};

export default HeaderContainer;
