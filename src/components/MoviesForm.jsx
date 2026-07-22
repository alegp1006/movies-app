import { useSearchMovies } from "../hooks/useSearchMovies";
import { useMoviesForm } from "../hooks/useMoviesForm";

export function MoviesForm() {
  const { query, error, handleChange } = useSearchMovies();
  const { handleSubmit, hanldeChangeSort } = useMoviesForm({ query });

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={handleChange}
        type="text"
        name="search-input"
      />

      <label>
        <input type="checkbox" onChange={hanldeChangeSort} />
        Ordenar
      </label>

      <p style={{ color: "red" }}>{error}</p>
      <button disabled={query === ""} type="submit">
        buscar
      </button>
    </form>
  );
}
