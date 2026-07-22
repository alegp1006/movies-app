export async function searchMovies({ query }) {
  const key = import.meta.env.VITE_KEY_MOVIES_API;
  if (query === "") return null;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
    );
    const json = await response.json();
    const movies = json.Search;
    const moviesTyped = movies?.map((m) => ({
      title: m.Title,
      year: m.Year,
      id: m.imdbID,
      poster: m.Poster,
      type: m.Type,
    }));
    console.log(moviesTyped);
    return moviesTyped;
  } catch (e) {
    throw new Error("error to search movies: " + e.message);
  }
}
