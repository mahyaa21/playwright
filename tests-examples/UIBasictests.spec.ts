import { test } from "@playwright/test";
test("Browser Context playwright test", async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto("https://www.google.com/");
    // you can also page instead of creating page from browser
    // if you do not have specific cookies to add to the browser and page
});
test("Page playwright test", async ({ page }) => {
	await page.goto("https://www.google.com/");
});