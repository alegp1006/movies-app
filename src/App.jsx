import "./App.css";
import { ListMovies } from "./components/ListMovies";
import { Modal } from "./components/Modal";
import { MovieInfo } from "./components/MovieInfo";
import { Movies } from "./components/Movies";
import { MoviesForm } from "./components/MoviesForm";
import { useGlobalMoviesContext } from "./context/useGlobalMoviesContext";

function App() {
  const { movieInfo, movies, loadingMovies } = useGlobalMoviesContext();
  return (
    <>
      <header>
        <h1>buscador de peliculas</h1>
        <MoviesForm />
        <Modal>
          <MovieInfo movieID={movieInfo} />
        </Modal>
      </header>
      {loadingMovies && <p>Loading...</p>}
      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
