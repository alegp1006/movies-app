import { createContext } from "react";
import { useMoviesById } from "../hooks/useMovieById";
import { useMovies } from "../hooks/useMovies";
import { useMoviesForm } from "../hooks/useMoviesForm";

const GlobalMoviesContext = createContext(null);

const GlobalMoviesProvider = ({ children }) => {
  const { movieInfo, loading, error, getMovieInfo } = useMoviesById();
  const {
    movies,
    getMovies,
    loading: loadingMovies,
    error: errorMovies,
  } = useMovies();
  const { sort, hanldeChangeSort } = useMoviesForm();

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
        sort,
        hanldeChangeSort,
      }}>
      {children}
    </GlobalMoviesContext.Provider>
  );
};

export { GlobalMoviesContext, GlobalMoviesProvider };
