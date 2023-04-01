import { expect, Page } from "@playwright/test";


export class OrderConfirmationPage {

    private page: Page
    private orderPlacedText = () => this.page.getByText("ORDER PLACED!");
   
    constructor(page: Page){
        this.page = page;
    }

    public async assertOrderPlacedTextToBeVisible() {
        await expect(this.orderPlacedText()).toBeVisible();
    }

}