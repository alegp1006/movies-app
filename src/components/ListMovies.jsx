import { useModalContext } from "../context/useModalContext";

export function ListMovies({ movies }) {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
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
              onClick={openModal}>
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
