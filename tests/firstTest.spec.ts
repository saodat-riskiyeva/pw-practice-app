import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("locator syntax rules", async ({ page }) => {
  // by tag name
  await page.locator("input");

  // by id
  await page.locator("#inputEmail1");

  // by class name
  await page.locator(".shape-rectangle");

  // by attribute
  await page.locator("[placeholder='Email']");

  // by Class value
  await page.locator("[class='input-full-width size-medium shape-rectangle']");

  // combine selectors
  await page.locator("input[placeholder='Email'].shape-rectangle");

  // by XPath
  await page.locator("//input[@placeholder='Email']");
});
