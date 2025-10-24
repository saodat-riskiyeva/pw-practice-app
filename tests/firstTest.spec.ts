import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

// test("locator syntax rules", async ({ page }) => {
//   // by tag name
//   await page.locator("input");

//   // by id
//   await page.locator("#inputEmail1");

//   // by class name
//   await page.locator(".shape-rectangle");

//   // by attribute
//   await page.locator("[placeholder='Email']");

//   // by Class value
//   await page.locator("[class='input-full-width size-medium shape-rectangle']");

//   // combine selectors
//   await page.locator("input[placeholder='Email'].shape-rectangle");

//   // by XPath
//   await page.locator("//input[@placeholder='Email']");

//   // by partial text match
//   await page.locator(":text('Sign in')");

//   // by exact text match
//   await page.locator(":text-is('Sign in')");
// });

test("interact with elements by roles", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().click();
  await page.getByRole("button", { name: "Sign in" }).first().click();

  await page.getByLabel("Email").first().click();
  await page.getByPlaceholder("Jane Doe").click();

  await page.getByText("Using the Grid").click();
  await page.getByTitle("IoT Dashboard").click();
});

test("locating child elements", async ({ page }) => {
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();
});
