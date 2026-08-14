import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";

export function useStateLocalStorage({ key = "state", initialValue }) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return item || initialValue;
  });

  useEffect(() => {
    setItem({ key, value });
  }, [value]);

  return [value, setValue];
}
