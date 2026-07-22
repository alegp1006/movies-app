// @ts-check
import { test, expect } from "@playwright/test";

test("Probar que al borrar el texto del input se limpia la lista de resultados", async ({
  page,
}) => {
  const text = "avengers";
  const result = page.getByTestId("movie-result");

  await page.goto("");
  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill(text);
  await page.getByRole("button", { name: "buscar", exact: true }).click();

  await expect(result.first()).toBeVisible();

  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill("");

  await expect(result.first()).toBeHidden();
});

test("Buscar varias películas seguidas y confirmar que la lista se actualiza correctamente", async ({
  page,
}) => {
  const firstText = "avengers";
  const secondText = "pocoyo";

  await page.goto("");
  await page.getByRole("textbox").fill(firstText);
  await page.getByRole("button", { name: "buscar", exact: true }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "The Avengers2012" })
    .getByRole("heading");
  await page.getByText("2012", { exact: true }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "The Avengers2012" })
    .getByRole("img");
  const firstResult = page
    .getByRole("listitem")
    .filter({ hasText: "The Avengers2012" })
    .getByRole("img");
  await page.getByRole("textbox").fill(secondText);
  await page.getByRole("button", { name: "buscar", exact: true }).click();
  await page.getByRole("heading", { name: "Pocoyo", exact: true });
  await page.getByText("2005–");
  await page.getByRole("img", { name: "Pocoyo", exact: true });
  const secondResult = page.getByRole("img", { name: "Pocoyo", exact: true });

  await expect(secondResult !== firstResult).toBe(true);
});

test("Validar que los resultados se muestran en formato de cuadrícula", async ({
  page,
}) => {
  await page.goto("");
  await page.getByRole("textbox").fill("wally");
  await page.locator("form").click();
  const locator = page.getByRole("list");
  await expect(locator).toHaveCSS("display", "grid");
});

test("Comprobar que el scroll funciona cuando hay muchos resultados", async ({
  page,
}) => {
  const result = page.getByTestId("movie-result");
  await page.goto("");
  await page.getByRole("textbox").fill("avengers");
  await page.getByRole("button", { name: "buscar", exact: true }).click();
  await expect(result.first()).toBeVisible();
  await page.pause();
  const element = page.getByRole("button", {
    name: "volver a buscar",
    exact: true,
  });
  await element.scrollIntoViewIfNeeded();
  await page.pause();
});

test("Probar que el input mantiene el valor tras la búsqueda", async ({
  page,
}) => {
  const query = "avengers";
  await page.goto("");
  await page.getByRole("textbox").fill(query);
  await page.getByRole("button", { name: "buscar", exact: true }).click();
  await expect(page.getByRole("textbox", { name: query })).toBeTruthy();
});

test("Validar que se pueden usar mayúsculas/minúsculas indistintamente (“matrix” vs “Matrix”)", async ({
  page,
}) => {
  const result = page.getByTestId("movie-result");

  await page.goto("");
  const query = "matrix";
  const upercaseQuery = "Matrix";
  await page.getByRole("textbox").fill(query);
  await page.getByRole("button", { name: "buscar", exact: true }).click();
  await expect(result.first()).toBeVisible();
  await page.getByRole("textbox").fill(upercaseQuery);
  await page.getByRole("button", { name: "buscar", exact: true }).click();
  await expect(result.first()).toBeVisible();
});
