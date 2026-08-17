import { useGlobalMoviesContext } from "../context/useGlobalMoviesContext";
import "../styles/movieInfo.css";
import { Star } from "./Icons";

export function MovieInfo() {
  const { movieInfo, loading } = useGlobalMoviesContext();

  if (loading) return <p className="loading-text">Cargando información...</p>;
  if (!movieInfo) return null;

  return (
    <article
      className="movie-detail"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.95) 90%), url(${movieInfo.poster})`,
      }}>
      <div className="movie-content">
        <header className="movie-header">
          <h2>{movieInfo.title}</h2>
        </header>

        <div className="movie-details">
          <div className="movie-meta">
            <span>{movieInfo.year}</span>
            <span className="dot">•</span>
            <span>{movieInfo.genre}</span>
            <span className="dot">•</span>
            <span>{movieInfo.language}</span>
          </div>

          <p className="movie-description">{movieInfo.description}</p>

          <div className="movie-rating">
            <Star width={"16px"} height={"16px"} color={"#edb832"} />
            <span>{movieInfo.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
