import { Page, expect} from "@playwright/test";
import { SignupBuilder } from "../testData/signup.data";
import { ConfigReader } from "../config-reader/config.reader";


export class SignupPage {

    private page: Page
    private titleRadioButton = () => this.page.locator("id=id_gender1");
    private nameTextbox = () => this.page.getByPlaceholder('Name')
    private emailTextbox = () => this.page.locator("css=input[data-qa='signup-email']");
    private passwordTextbox = () => this.page.locator("id=password");
    private dayDropdown = () => this.page.locator("id=days");
    private monthDropdown = () => this.page.locator("id=months");
    private yearDropdown = () => this.page.locator("id=years");
    private firstNameTextbox = () => this.page.locator("id=first_name");
    private lastNameTextbox = () => this.page.locator("id=last_name");
    private addressTextbox = () => this.page.locator("id=address1");
    private countryDropdown = () => this.page.locator("id=country");
    private stateTextbox = () => this.page.locator("id=state");
    private cityTextbox = () => this.page.locator("id=city");
    private zipcodeTextbox = () => this.page.locator("id=zipcode");
    private phoneTextbox = () => this.page.locator("id=mobile_number");
    private createAccountButton = () => this.page.getByRole('button', { name: 'Create Account' });
    private signupButton = () => this.page.getByRole('button', { name: 'Signup' });
    private accountCreatedLabel = () => this.page.getByText('Account Created!');

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto(ConfigReader.APP_URL + "signup");
    }

    public async signupNewUser(signupData: SignupBuilder) {
        await this.nameTextbox().fill(signupData.name);
        await this.emailTextbox().fill(signupData.emailAddress);
        await this.signupButton().click();
        await this.titleRadioButton().click();
        await this.passwordTextbox().fill(signupData.password);
        await this.dayDropdown().selectOption(signupData.day);
        await this.monthDropdown().selectOption(signupData.month);
        await this.yearDropdown().selectOption(signupData.year);
        await this.firstNameTextbox().fill(signupData.firstName);
        await this.lastNameTextbox().fill(signupData.lastName);
        await this.addressTextbox().fill(signupData.address);
        await this.countryDropdown().selectOption("United States");
        await this.stateTextbox().fill(signupData.state);
        await this.cityTextbox().fill(signupData.city)
        await this.zipcodeTextbox().fill(signupData.zipCode);
        await this.phoneTextbox().fill(signupData.phone);
        await this.createAccountButton().click();
        await this.page.waitForURL('**/account_created');
    }

    public async assertAccountCreatedTextToBeVisible() {
        await expect(this.accountCreatedLabel()).toBeVisible();
    }
}