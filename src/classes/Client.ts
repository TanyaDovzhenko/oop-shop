import { IClient } from "../types/interfaces"
import { Shop } from "./Shop"

export class Client extends IClient {
    buy(productId: string) {
        Shop.getInstance().sellProduct(productId, this)
    }
}