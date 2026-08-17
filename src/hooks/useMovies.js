import { useState, useRef, useCallback } from "react";
import { searchMovies } from "../services/movies";
import { useStateLocalStorage } from "./useStateLocalStorage";

export function useMovies() {
  const [movies, setMovies] = useStateLocalStorage("movies-state", []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef("");

  const getMovies = useCallback(async (query) => {
    console.log(previusSearch.current);
    if (query === previusSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previusSearch.current = query;
      const newMovies = await searchMovies({ query });
      await setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // const sortedMovies = useMemo(() => {
  //   return sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies;
  // }, [movies, sort]);

  return { movies, getMovies, loading, error };
}
