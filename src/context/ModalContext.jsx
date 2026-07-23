import { createContext, ReactNode, useState } from "react";

const ModalContext = createContext({
  state: false,
  setState: () => null,
});

const ModalProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
