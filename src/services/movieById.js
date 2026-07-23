export async function movieById(id) {
  const key = import.meta.env.VITE_KEY_MOVIES_API;
  if (id === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&i=${id}`,
    );
    const json = await response.json();
    const movieInfo = {
      title: json.Title,
      year: json.Year,
      poster: json.Poster,
      genre: json.Genre,
      language: json.Language,
      rating: json.imdbRating,
      id: json.imdbID,
      type: json.Type,
    };
    return movieInfo;
  } catch (e) {
    throw new Error(`error to get movie info: ${e.message}`);
  }
}
