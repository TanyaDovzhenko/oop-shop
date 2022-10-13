import { IClient, IProduct } from "../types/abstracts"
import { Shop } from "./Shop"

export class Client extends IClient {
    buy(product: IProduct) {
        Shop.getInstance().sellProduct(product, this)
    }
}