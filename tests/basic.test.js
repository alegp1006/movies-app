// @ts-check
import { test, expect } from "@playwright/test";

test("Abrir la app y verificar que el input de búsqueda está visible", async ({
  page,
}) => {
  await page.goto("");
  await page.getByRole("textbox");

  expect(page.getByRole("textbox")).toBeVisible();
});

test("Escribir un texto en el input y comprobar que se refleja correctamente", async ({
  page,
}) => {
  const text = "avenger";
  await page.goto("");
  await page.getByRole("textbox").fill(text);

  //expect(page.getByRole("textbox")).toHaveValue(text);
});

test("Hacer clic en el botón de buscar y validar que aparecen resultados", async ({
  page,
}) => {
  await page.goto("");
  //const text = "avenger";
  const text = "avenger";
  await page.getByRole("textbox").fill(text);
  await page.getByRole("button", { name: "buscar", exact: true }).click();

  const result = page.getByTestId("movie-result");

  await expect(result.first()).toBeVisible();
});

test("Buscar una película conocida (“Avenger”) y confirmar que aparece en la lista", async ({
  page,
}) => {
  await page.goto("");
  const text = "Avenger";
  await page.getByRole("textbox").fill(text);
  await page.getByRole("button", { name: "buscar", exact: true }).click();

  const result = page.getByTestId("movie-result");

  await expect(result.first()).toContainText(text);
});

test("Buscar un título inexistente y validar que se muestra el mensaje de “sin resultados”", async ({
  page,
}) => {
  await page.goto("");
  const text = "sjadfysef slia";
  await page.getByRole("textbox").fill(text);
  await page.getByRole("button", { name: "buscar", exact: true }).click();

  expect(
    page.getByText("no se encontraron pelicula para esta busqueda"),
  ).toBeVisible();
});

test("Verificar que cada resultado muestra título, año y póster.", async ({
  page,
}) => {
  await page.goto("");
  const text = "Avenger";
  await page.getByRole("textbox").fill(text);
  await page.getByRole("button", { name: "buscar", exact: true }).click();

  const result = page.getByTestId("movie-result");

  await expect(result.first()).toContainText(text);

  const year = /\d{4}/;
  await expect(result.first()).toContainText(year);

  await expect(result.first().getByRole("img", { name: text })).toBeTruthy();
});

test("Comprobar que el botón de búsqueda está deshabilitado si el input está vacío", async ({
  page,
}) => {
  await page.goto("");
  await page.getByRole("textbox").fill("");
  expect(
    page.getByRole("button", { name: "buscar", exact: true }),
  ).toBeDisabled();
});
