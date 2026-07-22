import { useState } from "react";
import { useMovies } from "./useMovies";
import { useSearchMovies } from "./useSearchMovies";

export function useMoviesForm() {
  const [sort, setSort] = useState(false);
  const { query, error, handleChange } = useSearchMovies();

  const {
    movies: sortedMovies,
    loading,
    getMovies,
  } = useMovies({ query, sort });

  const hanldeChangeSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query });
  };

  return {
    handleSubmit,
    hanldeChangeSort,
    sort,
    query,
    error,
    loading,
    handleChange,
    sortedMovies,
  };
}
