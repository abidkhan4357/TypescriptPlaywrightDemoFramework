import { expect, Page } from "@playwright/test";
import { ConfigReader } from "../config-reader/config.reader";

export class LoginPage {

    private page: Page
    private emailTextbox = () => this.page.locator("css=input[data-qa='login-email']");
    private passwordTextbox = () => this.page.getByPlaceholder("Password");
    private loginButton = () => this.page.getByRole('button', { name: 'Login' });
    private invalidLoginMessage = () => this.page.getByText("Your email or password is incorrect!");
    private configReader: ConfigReader;

    constructor(page: Page) {
        this.page = page;
        this.configReader = ConfigReader.getEnvVars();
    }

    public async goto() {
        await this.page.goto(ConfigReader.APP_URL + "login");
    }

    public async loginToApplication(email: string, password: string) {
        await this.emailTextbox().fill(email);
        await this.passwordTextbox().fill(password);
        await this.loginButton().click();
    }

    public async assertInvalidLoginMessageIsVisible() {
        await this.invalidLoginMessage().isVisible();
    }

}