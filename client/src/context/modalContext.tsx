import { createContext, CSSProperties, ReactNode, useState } from "react";

interface ContextProps {
  modalState: StateProps;
  updateModalState: (value: StateProps) => void;
}

interface StateProps {
  show_modal: boolean;
  child?: ReactNode;
  modal_style?: any;
}

export const modalContext = createContext<ContextProps | undefined>(undefined);

export const ModalState: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<StateProps>({
    show_modal: false,
    child: null,
    modal_style: {},
  });
  const updateModalState = (value: StateProps) => setModalState({ ...modalState, ...value });
  return (
    <modalContext.Provider
      value={{
        modalState,
        updateModalState,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};
