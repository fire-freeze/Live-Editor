import { useContext } from "react";
import EditorContainer from "../../components/containers/EditorContainer";
import Modal from "../../components/modal-components/Modal";
import HeaderContainer from "../../components/containers/HeaderContainer";
import { modalContext } from "../../context/modalContext";

export default function AppContainer() {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const { modalState } = context;
  return (
    <div className="app-container align-column">
      <HeaderContainer />
      <EditorContainer />
      <Modal show_modal={modalState.show_modal} style={modalState.modal_style}>
        {modalState.child}
      </Modal>
    </div>
  );
}
