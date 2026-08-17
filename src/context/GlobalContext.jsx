import { createContext } from "react";
import { useMoviesById } from "../hooks/useMovieById";
import { useMovies } from "../hooks/useMovies";

const GlobalMoviesContext = createContext(null);

const GlobalMoviesProvider = ({ children }) => {
  const { movieInfo, loading, error, getMovieInfo } = useMoviesById();
  const {
    movies,
    getMovies,
    loading: loadingMovies,
    error: errorMovies,
  } = useMovies();

  return (
    <GlobalMoviesContext.Provider
      value={{
        movieInfo,
        loading,
        error,
        getMovieInfo,
        movies,
        getMovies,
        loadingMovies,
        errorMovies,
      }}>
      {children}
    </GlobalMoviesContext.Provider>
  );
};

export { GlobalMoviesContext, GlobalMoviesProvider };
