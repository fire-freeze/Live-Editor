import { ModalState } from "../../context/modalContext";
import { ExplorerState } from "../../context/explorerContext";
import React from "react";
import AppContainer from "./AppContainer.page";
const EditorRoute: React.FC = () => {
  return (
    <>
      <ModalState>
        <ExplorerState>
          <AppContainer />
        </ExplorerState>
      </ModalState>
    </>
  );
};

export default EditorRoute;
