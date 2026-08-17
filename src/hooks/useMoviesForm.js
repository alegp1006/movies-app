import { useState } from "react";

export function useMoviesForm() {
  const [sort, setSort] = useState(false);

  const hanldeChangeSort = () => {
    setSort(!sort);
  };
  return {
    hanldeChangeSort,
    sort,
  };
}
