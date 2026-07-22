import { useState } from "react";
import { useMovies } from "./useMovies";

export function useMoviesForm({ query }) {
  const [sort, setSort] = useState(false);
  const { getMovies, movies } = useMovies({ query, sort });

  const hanldeChangeSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query });
    console.log(movies);
  };

  return {
    handleSubmit,
    hanldeChangeSort,
    query,
  };
}
