import { Product } from './product.data'
import { PaymentInfo } from  './payment.info.data';

export interface OrderInfo {
  products: Product[];
  paymentInfo: PaymentInfo;
}
