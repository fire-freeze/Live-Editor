import React, { useEffect, useRef } from "react";

interface PropTypes {
  entries: Array<any>;
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu: React.FC<PropTypes> = ({ entries, position }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const menuNode = menuRef.current as HTMLElement;
    if (menuNode.clientHeight + menuNode.getBoundingClientRect().y > window.innerHeight)
      menuNode.style.top = window.innerHeight - menuNode.clientHeight - 5 + "px";
  }, []);
  return (
    <div
      ref={menuRef}
      className="context-menu align-column "
      style={{
        left: position.x,
        top: position.y,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {entries.map((item: any, index: number) => {
        return (
          <div className="context-menu-item clickable" key={index} onClick={() => item.action()}>
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ContextMenu;
