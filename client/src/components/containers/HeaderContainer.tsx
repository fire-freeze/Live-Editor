import React from "react";

interface PropTypes {
  children?: React.ReactNode;
}

const HeaderContainer: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className="header-container">
      <header> LIVE EDITOR </header>
      {children}
    </div>
  );
};

export default HeaderContainer;
