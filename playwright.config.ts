import { defineConfig, devices } from "@playwright/test";

/**
 * @See https://playwright.dev/docs/test-configuration
 */
const config = {
	testDir: "./tests",
	timeout: 3 * 60 * 1000,
	expect: {
		timeout: 4 * 1000,
	},
	reporter: "html",
	use: {
		browserName: "webkit",
		headless: false, // this remove --headed and doesn't show browser as well.
	},
};
export default config; // It helps us that the config Obj is available in all over the project
