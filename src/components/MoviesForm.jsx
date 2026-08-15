import { Search } from "./Icons";
import "../styles/input.css";
import { Checkbox } from "./Checkbox";

export function MoviesForm({
  handleChange,
  handleSubmit,
  hanldeChangeSort,
  query,
  error,
}) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <fieldset className="fieldset">
        <label className="input-label">
          <Search width={"20px"} height={"20px"} />
          <input
            className="input-search"
            placeholder="buscar..."
            value={query}
            onChange={handleChange}
            type="text"
            name="search-input"
          />
        </label>
        <p style={{ color: "red" }}>{error}</p>
      </fieldset>

      <button disabled={query === ""} type="submit">
        buscar
      </button>
      <label className="sort">
        <input
          type="checkbox"
          className="checkbox-sort"
          onChange={hanldeChangeSort}
        />
        Ordenar
      </label>
      <Checkbox onChange={hanldeChangeSort} />
    </form>
  );
}
