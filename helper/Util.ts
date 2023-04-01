import * as fs from 'fs';
import { OrderInfo } from '../testData/order.info.data';

export class Util {

    public static async parseOrderInfo(jsonFilePath: string): Promise<OrderInfo> {
        const jsonFileData = await fs.promises.readFile(jsonFilePath, 'utf-8');
        return JSON.parse(jsonFileData);
    }

}