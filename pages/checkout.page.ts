import { Page } from "@playwright/test";


export class CheckoutPage {

    private page: Page
    private placeOrderButton = () => this.page.getByText("Place Order");

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnPlaceOrder() {
        await this.placeOrderButton().click();
    }
}