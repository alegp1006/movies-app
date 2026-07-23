import { createContext } from "react";
import { useMoviesById } from "../hooks/useMovieById";

const GlobalMoviesContext = createContext(null);

const GlobalMoviesProvider = ({ children }) => {
  const { movieInfo, loading, error, getMovieInfo } = useMoviesById();

  return (
    <GlobalMoviesContext.Provider
      value={{ movieInfo, loading, error, getMovieInfo }}>
      {children}
    </GlobalMoviesContext.Provider>
  );
};

export { GlobalMoviesContext, GlobalMoviesProvider };
