import { test } from '../fixtures/base.page'
import { Util } from '../helper/Util';
import { OrderInfo } from '../testData/order.info.data';

//This test is using the playwright storage auth which is set in global.setup.ts and also in the playwright.config.ts to run as globalSetup
test.beforeEach(async ({loginPage}) => {
  await loginPage.goto();
});


//You can update the placeorder.data.json file to add one or multiple products as well as control the quantity 
test("Buy product and checkout with data driven using json", async ({productPage, viewcartPage, checkoutPage, paymentPage, orderConfirmationPage}) => {
  const orderInfo: OrderInfo = await Util.parseOrderInfo("./testData/placeorder.data.json");
  await productPage.searchProductAndAddToCart();
  await viewcartPage.clickOnProceedToCheckout();
  await checkoutPage.clickOnPlaceOrder();
  await paymentPage.fillOutPaymentInfo(orderInfo.paymentInfo.nameOnCard, orderInfo.paymentInfo.cardNumber, 
    orderInfo.paymentInfo.cvc, orderInfo.paymentInfo.expMonth, orderInfo.paymentInfo.expYear);
  await orderConfirmationPage.assertOrderPlacedTextToBeVisible(); 
});