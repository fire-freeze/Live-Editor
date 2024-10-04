import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  modalState: StateProps;
  updateModalState: (value: StateProps) => void;
}

interface StateProps {
  show_modal: boolean;
  child: ReactNode | null;
}

export const modalContext = createContext<ContextProps | undefined>(undefined);

export const ModalState: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<StateProps>({
    show_modal: false,
    child: null,
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
