import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { Util } from '../helper/Util';
import { OrderInfo } from '../testData/order.info.data';
import { Product } from "../testData/product.data";

export class ProductPage {

    private page: Page
    private homePage: HomePage;
    private productItemSearchTextbox = () => this.page.locator("id=search_product");
    private productSearchButton = () => this.page.locator("id=submit_search");
    private productImage = () => this.page.locator("css=.productinfo.text-center");
    private addToCartButton = () => this.page.locator("//div[@class='overlay-content']//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart']");
    private continueShoppingButton = () => this.page.getByRole('button', { name: "Continue Shopping" })
    private cartIcon = () => this.page.locator("//a[@href='/view_cart']/i[@class='fa fa-shopping-cart']");
    private viewCartLabel = () => this.page.getByText("View Cart");

    constructor(page: Page,) {
        this.page = page;
        this.homePage = new HomePage(this.page);

    }

    private async searchForProduct(name: string) {
        await this.homePage.clickOnProductsLabel();
        await this.productItemSearchTextbox().fill(name);
        await this.productSearchButton().click();
    }

    private async addToCart(product: Product) {
        if (product.quantity > 1) {
            for (let i = 0; i < product.quantity; i++) {
                await this.productImage().hover();
                await this.addToCartButton().click();
                if (i < product.quantity - 1) {
                    if (await this.continueShoppingButton().isVisible) {
                        await this.continueShoppingButton().click();
                    }
                }
            }
        } else {
            await this.productImage().hover();
            await this.addToCartButton().click();
        }
    }

    public async searchProductAndAddToCart() {
        const orderInfo: OrderInfo = await Util.parseOrderInfo("./testData/placeorder.data.json");
        const products = orderInfo.products;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            await this.searchForProduct(product.name);

            await this.addToCart(product);
        }

        await this.cartIcon().click();
    }


}