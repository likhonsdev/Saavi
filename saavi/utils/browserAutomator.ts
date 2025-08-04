// utils/browserAutomator.ts
import { chromium, Page } from 'playwright'; // Use Playwright for Node.js projects

class BrowserAutomator {
  async runTest(url: string, testFunction: (page: Page) => Promise<void>) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    try {
      await page.goto(url);
      await testFunction(page);
      console.log("✅ Browser test passed!");
    } catch (error) {
      console.error("❌ Browser test failed:", error);
      // Take a screenshot on failure for debugging
      await page.screenshot({ path: 'test-failure.png' });
      throw error;
    } finally {
      await browser.close();
    }
  }
}

export const browserAutomator = new BrowserAutomator();
