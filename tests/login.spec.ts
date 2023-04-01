import { test } from '../fixtures/base.page'
import { ConfigReader } from "../config-reader/config.reader";

test.beforeEach(async ({loginPage, context}) => {
    context.clearCookies();
    await loginPage.goto();
});

//basic login test case showing reading the credentials from config file
test("Login with valid credentials", async({loginPage, homePage}) => {
    await loginPage.loginWithValidCredentials(ConfigReader.EMAIL, ConfigReader.PASSWORD);
    await homePage.assertLogoutLabelIsVisible();
});
