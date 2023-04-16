import { Browser, chromium, Page, BrowserContext } from "@playwright/test";
import { ConfigReader } from "./config-reader/config.reader";
import { LoginPage } from "./pages/login.page";
import { HomePage } from "./pages/home.page";

async function globalSetup() {

    const browser: Browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.goto();
    await loginPage.loginToApplication(ConfigReader.EMAIL, ConfigReader.PASSWORD);
    await homePage.assertLogoutLabelIsVisible();
   
    await page.context().storageState({ path: "./loginAuth.json" });
    await browser.close();
    

}

export default globalSetup;