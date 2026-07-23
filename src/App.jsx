import "./App.css";
import { ListMovies } from "./components/ListMovies";
import { Modal } from "./components/Modal";
import { Movies } from "./components/Movies";
import { MoviesForm } from "./components/MoviesForm";
import { useMoviesForm } from "./hooks/useMoviesForm";

function App() {
  const {
    sortedMovies,
    query,
    error,
    loading,
    handleChange,
    handleSubmit,
    hanldeChangeSort,
  } = useMoviesForm();

  return (
    <>
      <header>
        <h1>buscardor de peliculas</h1>
        <MoviesForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          hanldeChangeSort={hanldeChangeSort}
          query={query}
          error={error}
        />
        <Modal>hola</Modal>
      </header>
      {loading && <p>cargando...</p>}
      <main>
        <Movies movies={sortedMovies} query={query} />
      </main>
      <button
        style={{ margin: "20px" }}
        onClick={() => {
          scrollTo(0, 0);
        }}>
        volver
      </button>
    </>
  );
}

export default App;
