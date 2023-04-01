import { Product } from '../testData/product.data'
import { PaymentInfo } from  '../testData/payment.info.data';

export interface OrderInfo {
  products: Product[];
  paymentInfo: PaymentInfo;
}
