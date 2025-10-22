import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("test suite 1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Charts").click();
  });

  test("test 1: 1", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });
  test("test 1: 2", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe("test suite 2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("test 2: 1", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });
  test("test 2: 2", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});
