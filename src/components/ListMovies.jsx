import { useEffect, useRef, useState } from "react";
import { useModalContext } from "../context/useModalContext";
import { useGlobalMoviesContext } from "../context/useGlobalMoviesContext";
import "../styles/movies.css";
import { Date } from "./Icons";

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
              <img
                style={{ width: "100%" }}
                className="img-movie"
                src={m.poster}
                alt={m.title}
              />
              <section className="data-movie">
                <h3 className="title-movie">
                  {m.title}
                  <span className="type-movie">{m.type}</span>
                </h3>

                <div className="year-movie-container">
                  <Date width="14px" height="14px" />
                  <p className="year-movie">{m.year}</p>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
}
