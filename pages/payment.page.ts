import { Page } from "@playwright/test";


export class PaymentPage {

    private page: Page
    private nameOnCardTextbox = () => this.page.locator("css=input[name='name_on_card']");
    private cardNumber = () => this.page.locator("css=input[name='card_number']");
    private cvcTestbox = () => this.page.getByPlaceholder("ex. 311");
    private expirationMonthTextBox = () => this.page.getByPlaceholder("MM");
    private expirationYearTextBox = () => this.page.getByPlaceholder("YYYY");
    private payAndConfirmOrderButton = () => this.page.getByRole('button', {name: 'Pay and Confirm Order'});

    constructor(page: Page) {
        this.page = page;
    }

    public async fillOutPaymentInfo(name_on_card: string, card_number: string, cvc: string, expirationMonth: string, expirationYear: string) {
        await this.nameOnCardTextbox().fill(name_on_card);
        await this.cardNumber().fill(card_number);
        await this.cvcTestbox().fill(cvc);
        await this.expirationMonthTextBox().fill(expirationMonth);
        await this.expirationYearTextBox().fill(expirationYear);
        await this.payAndConfirmOrderButton().click();        
    }


}