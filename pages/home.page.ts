import { expect, Page } from "@playwright/test";

export class HomePage {

  private page: Page;
  private productsLabel = () => this.page.locator("css=a[href='/products']");
  private loggedInAsLabel = () => this.page.getByText("Logged in as");
  private continueShoppingButton = () => this.page.getByRole('button', { name: "Continue Shopping" })


  constructor(page: Page) {
    this.page = page;
  }

  public async clickOnProductsLabel() {
    if (await this.continueShoppingButton().isVisible()) {
      await this.continueShoppingButton().click();
    }
    await this.productsLabel().click();

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
