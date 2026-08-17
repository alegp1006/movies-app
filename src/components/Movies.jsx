import "../App.css";
import { ListMovies } from "./ListMovies";
import { NoListMovies } from "./NoListMovies";

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListMovies movies={movies} /> : <NoListMovies />;
}
