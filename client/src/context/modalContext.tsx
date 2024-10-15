import { createContext, CSSProperties, ReactNode, useState } from "react";

interface ContextProps {
  modalState: StateProps;
  updateModalState: (value: StateProps) => void;
}

interface StateProps {
  show_modal: boolean;
  child: ReactNode | null;
  style: CSSProperties | {};
}

export const modalContext = createContext<ContextProps | undefined>(undefined);

export const ModalState: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<StateProps>({
    show_modal: false,
    child: null,
    style: {},
  });
  const updateModalState = (value: StateProps) => setModalState(value);
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
