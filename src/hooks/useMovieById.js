import { useCallback, useRef, useState } from "react";
import { movieById } from "../services/movieById";

export function useMoviesById() {
  const [movieInfo, setMovieInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusId = useRef(null);

  const getMovieInfo = useCallback(async (id) => {
    if (id === previusId.current) return;

    try {
      setLoading(true);
      setError(null);
      previusId.current = id;
      const newMovieInfo = await movieById(id);
      await setMovieInfo(newMovieInfo);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    movieInfo,
    loading,
    error,
    getMovieInfo,
  };
}
