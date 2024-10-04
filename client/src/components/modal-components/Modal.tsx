import React, { useContext, useEffect, useRef } from "react";
import { modalContext } from "../../context/modalContext";
import store from "../../store/store";

console.log(store.getState());
interface PropTypes {
  children?: React.ReactNode;
  show_modal: Boolean;
  style?: any;
}

const Modal: React.FC<PropTypes> = ({ children, show_modal, style }) => {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const { modalState, updateModalState } = context;
  let modalRef = useRef<any>();
  useEffect(() => {
    if (!modalState.show_modal) return;
    document.addEventListener("click", (event) => {
      console.log(modalState, modalRef);
      if (event.target !== modalRef.current) {
        updateModalState({
          ...modalState,
          show_modal: false,
        });
        console.log("MODAL CLOSED");
      }
    });
  }, []);
  return show_modal ? (
    <div
      ref={modalRef}
      className="placeholder-modal clickable "
      style={style}
      onClick={() => updateModalState({ ...modalState, show_modal: false })}
      onContextMenu={(e) => {
        e.preventDefault();
        updateModalState({ ...modalState, show_modal: false });
      }}
    >
      {children}
    </div>
  ) : null;
};

export default Modal;
