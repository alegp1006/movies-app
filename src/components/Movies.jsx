import "../App.css";
import { ListMovies } from "./ListMovies";
import { NoListMovies } from "./NoListMovies";

export function Movies({ movies, query }) {
  const hasMovies = movies?.length > 0;
  if (query === "") movies = [];

  return hasMovies ? <ListMovies movies={movies} /> : <NoListMovies />;
}
