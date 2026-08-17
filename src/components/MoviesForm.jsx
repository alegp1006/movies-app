import { Search } from "./Icons";
import "../styles/input.css";
import { Checkbox } from "./Checkbox";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGlobalMoviesContext } from "../context/useGlobalMoviesContext";

const FormSchema = z.object({
  query: z
    .string()
    .min(3, { message: "The movie name must be 3 characters or more" })
    .max(20, { message: "The movie name must be 20 characters or less" })
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "The movie name must contain only letters, numbers and underscore (_)",
    ),
});

export function MoviesForm() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });
  const value = getValues("query");
  const { getMovies, hanldeChangeSort } = useGlobalMoviesContext();

  return (
    <form
      onSubmit={handleSubmit((d) => {
        console.log(d.query);
        getMovies(d.query);
      })}
      className="form">
      <fieldset className="fieldset">
        <label className="input-label">
          <Search width={"20px"} height={"20px"} />
          <input
            className="input-search"
            placeholder="buscar..."
            type="text"
            name="search-input"
            max={20}
            {...register("query")}
          />
        </label>
        {errors?.query?.message && (
          <p style={{ color: "red" }}>{errors.query.message}</p>
        )}
      </fieldset>

      <button disabled={!isDirty || isSubmitting || value === ""} type="submit">
        {isSubmitting ? "Searching..." : "Search"}
      </button>
      <label className="sort">
        <Checkbox onChange={hanldeChangeSort} />
        Ordenar
      </label>
    </form>
  );
}
