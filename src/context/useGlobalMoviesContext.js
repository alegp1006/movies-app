import { useContext } from "react";
import { GlobalMoviesContext } from "./GlobalContext";

export const useGlobalMoviesContext = () => {
  const context = useContext(GlobalMoviesContext);

  if (!context) {
    throw new Error("Modal is being used outside it's provider");
  }

  return context;
};
