import { useEffect, useRef, useState } from "react";
import { useModalContext } from "../context/useModalContext";
import { useGlobalMoviesContext } from "../context/useGlobalMoviesContext";

export function ListMovies({ movies }) {
  const [movieId, setMovieId] = useState();
  const { state, setState } = useModalContext();
  const { getMovieInfo } = useGlobalMoviesContext();
  const movieIdRef = useRef("");

  useEffect(() => {
    if (state) {
      getMovieInfo(movieId);
    }
  }, [state]);

  const openModal = () => {
    setState(true);
  };
  const handleGetMovieId = (id) => {
    movieIdRef.current = id;
    setMovieId(movieIdRef.current);
  };

  return (
    <>
      <ul className="movies" name="movie-list">
        {movies.map((m) => {
          return (
            <li
              className="movie"
              data-testing="movie-result"
              key={m.id}
              onClick={() => {
                openModal();
                handleGetMovieId(m.id);
              }}>
              <h3>{m.title}</h3>
              <p>{m.year}</p>
              <img style={{ width: "100%" }} src={m.poster} alt={m.title} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
