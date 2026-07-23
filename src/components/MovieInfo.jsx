import { useGlobalMoviesContext } from "../context/useGlobalMoviesContext";

export function MovieInfo() {
  const { movieInfo, loading } = useGlobalMoviesContext(); // <-- Leemos los datos del Context

  if (loading) return <p>Cargando información...</p>;
  if (!movieInfo) return null;

  return (
    <article className="movie-detail">
      <header>
        <h2>{movieInfo.title}</h2>
        <span>({movieInfo.year})</span>
      </header>

      <div className="movie-content">
        <img src={movieInfo.poster} alt={movieInfo.title} />

        <div className="movie-details">
          <p>
            <strong>Género:</strong> {movieInfo.genre}
          </p>
          <p>
            <strong>Idioma:</strong> {movieInfo.language}
          </p>
          <p>
            <strong>Calificación:</strong> ⭐ {movieInfo.rating}
          </p>
          <p>
            <strong>Tipo:</strong> {movieInfo.type}
          </p>
        </div>
      </div>
    </article>
  );
}
