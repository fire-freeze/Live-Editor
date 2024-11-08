import { ModalState } from "../../context/modalContext";
import { ExplorerState } from "../../context/explorerContext";
import React from "react";
import AppContainer from "./AppContainer.page";
import { Provider } from "react-redux";
import store from "../../store/store";
const EditorRoute: React.FC = () => {
  return (
    <>
      <ModalState>
        <ExplorerState>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </ExplorerState>
      </ModalState>
    </>
  );
};

export default EditorRoute;
