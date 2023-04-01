import { Page } from "@playwright/test"

export class ViewCartPage {

    private page: Page
    private proceedToCheckoutButton = () => this.page.getByText("Proceed To Checkout");

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnProceedToCheckout() {
        await this.proceedToCheckoutButton().click();
    }

    


}