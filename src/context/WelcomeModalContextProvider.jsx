import { createContext, useContext, useEffect, useState } from "react";

export const WelcomeModalContext = createContext();

export const WelcomeModalContextProvider = ({ children }) => {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);

  const openWelcomeModal = () => {
    setIsWelcomeModalOpen(true);
  };

  const closeWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
  };

  const values = {
    isWelcomeModalOpen,
    openWelcomeModal,
    closeWelcomeModal,
  };

  return (
    <WelcomeModalContext.Provider value={values}>
      {children}
    </WelcomeModalContext.Provider>
  );
};

export const useWelcomeModal = () => useContext(WelcomeModalContext);
