import { IBonusService, IClient, IProduct } from "./abstracts"

export interface IShop {
    products: Array<IProduct>
    bonusService: IBonusService
    sellProduct(product: IProduct, client: IClient): void
}