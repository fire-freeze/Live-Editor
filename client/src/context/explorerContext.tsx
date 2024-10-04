import React, { createContext, useState, ReactNode } from "react";

interface StateProps {
  contextMenuNode: string;
  show_contextMenu: boolean;
  nodePosition: {
    x: number;
    y: number;
  };
}

interface ContextProps {
  explorerState: StateProps;
  updateExplorerState: (value: StateProps) => void;
}

export const explorerContext = createContext<ContextProps | undefined>(
  undefined
);
export const ExplorerState: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [explorerState, setExplorerState] = useState<StateProps>({
    contextMenuNode: "text",
    show_contextMenu: false,
    nodePosition: {
      x: 0,
      y: 0,
    },
  });
  const updateExplorerState = (value: StateProps) => {
    setExplorerState(value);
  };
  return (
    <explorerContext.Provider value={{ explorerState, updateExplorerState }}>
      {children}
    </explorerContext.Provider>
  );
};
