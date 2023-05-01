import { test } from '../fixtures/base.page'
import { ConfigReader } from "../config-reader/config.reader";
import { LoginTemplate } from '../dataFactory/templates/loginTemplate';

test.beforeEach(async ({ loginPage, context }) => {
    context.clearCookies();
    await loginPage.goto();
});

test.describe("Login feature tests", async () => {
    const loginTemplate = new LoginTemplate();

    //basic login test case showing reading the credentials from config file
    test("Login with valid credentials", async ({ loginPage, homePage }) => {
        await loginPage.loginToApplication(ConfigReader.EMAIL, ConfigReader.PASSWORD);
        await homePage.assertLogoutLabelIsVisible();
    });

    //the following tests showing using a template factory approach to generate different data objects based on test scenarios
    //ex: invalidEmail, invalidpassword ect.. Please check on design in DataFactory folder in project root

    test("Login with invalid email and valid password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("invalidEmail");
        await loginPage.loginToApplication(invalidTemplate.email as string, invalidTemplate.password as string);
        await loginPage.assertInvalidLoginMessageIsVisible();
    });

    test("Login with valid email and invalid password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("invalidPassword");
        await loginPage.loginToApplication(invalidTemplate.email as string, invalidTemplate.password as string);
        await loginPage.assertInvalidLoginMessageIsVisible();
    });

    //this test case shows using the template with faker library 
    test("Login with faker email and password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("fakerEmailAndPassword");
        await loginPage.loginToApplication(invalidTemplate.email as string, invalidTemplate.password as string);
        await loginPage.assertInvalidLoginMessageIsVisible();
    });

});

