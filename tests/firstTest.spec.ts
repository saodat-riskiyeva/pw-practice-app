import { test } from "@playwright/test";

// test.beforeAll(async () => {  });

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");

  await page.getByText("Forms").click();
});

test("the first test", async ({ page }) => {
  await page.getByText("Form Layouts").click();
});

test("navigate to datepicker page", async ({ page }) => {
  await page.getByText("Datepicker").click();
});

// test.afterEach(async ({ page }) => {});

// test.describe("test suite 1", () => {
//   test("the second test", () => {});
// });
