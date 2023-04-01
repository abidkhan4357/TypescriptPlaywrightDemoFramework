import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";
import { ProductPage } from "../pages/product.page";
import { ViewCartPage } from "../pages/viewcart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { OrderConfirmationPage } from "../pages/order.confirmation.page";
import { HomePage } from "../pages/home.page";
import { PaymentPage } from "../pages/payment.page";


export const test = base.extend<{ loginPage: LoginPage, signupPage: SignupPage, productPage: ProductPage, viewcartPage: ViewCartPage, 
checkoutPage: CheckoutPage, orderConfirmationPage: OrderConfirmationPage, homePage: HomePage, paymentPage: PaymentPage}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  viewcartPage: async ({ page }, use) => {
    await use(new ViewCartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  orderConfirmationPage: async ({ page }, use) => {
    await use(new OrderConfirmationPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  }
});
