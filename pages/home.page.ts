import { expect, Page } from "@playwright/test";

export class HomePage {

  private page: Page;
  private productsLabel = () => this.page.locator("css=a[href='/products']");
  private loggedInAsLabel = () => this.page.getByText("Logged in as");
  private continueShoppingButton = () => this.page.getByRole('button', { name: "Continue Shopping" })
  private addedItemDialog = () => this.page.locator("css=.modal-content");

  constructor(page: Page) {
    this.page = page;
  }

  public async clickOnProductsLabel(maxAttempts: number = 5) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      try {
        await this.productsLabel().click();
        break; // Exit the loop if the click was successful
      } catch (error) {
        await this.addedItemDialog().waitFor({ state: 'visible' });
        await this.continueShoppingButton().click();
        attempts++;
      }
    }
    if (attempts >= maxAttempts) {
      throw new Error(`Failed to click the "Products Label" after ${maxAttempts} attempts.`);
    }
    
    // Handle the Google vignette popup
    if (this.page.url().includes("#google_vignette")) {
      await this.page.goBack();
      await this.productsLabel().click();
    }

  }

  public async assertLogoutLabelIsVisible() {
    await expect(this.loggedInAsLabel()).toBeVisible();
  }

}
