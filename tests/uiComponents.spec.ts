import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test.describe("UI Components", () => {
  test("interact with checkboxes and radio buttons", async ({ page }) => {
    const checkbox1 = page.getByLabel("Remember me");
    const checkbox2 = page
      .locator('nb-card:has-text("Basic form")')
      .getByRole("checkbox")
      .nth(1);
    const radioOption1 = page
      .locator('nb-card:has-text("Using the Grid")')
      .getByRole("radio")
      .first();
    const radioOption2 = page
      .locator('nb-card:has-text("Using the Grid")')
      .getByRole("radio")
      .nth(1);

    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();

    await radioOption1.check();
    await expect(radioOption1).toBeChecked();

    await radioOption2.check();
    await expect(radioOption2).toBeChecked();
    await expect(radioOption1).not.toBeChecked();
  });

  test("interact with dropdowns", async ({ page }) => {
    const dropdown = page.getByLabel("Select option");

    await dropdown.selectOption("option1");
    await expect(dropdown).toHaveValue("option1");

    await dropdown.selectOption("option2");
    await expect(dropdown).toHaveValue("option2");
  });
});
