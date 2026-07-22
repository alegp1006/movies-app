import "./App.css";
import { ListMovies } from "./components/ListMovies";
import { Movies } from "./components/Movies";
import { MoviesForm } from "./components/MoviesForm";
import { useMovies } from "./hooks/useMovies";
import { useSearchMovies } from "./hooks/useSearchMovies";

function App() {
  const { query } = useSearchMovies();
  const { movies: sortedMovies, loading } = useMovies({ query });
  console.log(sortedMovies);

  return (
    <>
      <header>
        <h1>buscardor de peliculas</h1>
        <MoviesForm />
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
