import { useMemo } from "react";

export function useSortMovies({ movies, sort }) {
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { sortedMovies };
}
