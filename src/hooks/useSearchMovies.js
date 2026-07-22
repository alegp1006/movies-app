import { useState, useRef, useEffect } from "react";

export function useSearchMovies() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("no se puede buscar una pelicula vacia");
      return;
    }
    if (query.length < 3) {
      setError("la busqueda debe tener mas de 3 caracteres");
      return;
    }
    setError(null);
  }, [query]);

  return { query, error, handleChange };
}
