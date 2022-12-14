import { products } from "../data/products"
import { IShop } from "../types/interfaces"
import { BonusService } from "./BonusService"
import { IBonusService, IClient, IProduct } from "../types/abstracts"

export class Shop implements IShop {
    private static instance: Shop
    public products: Array<IProduct>
    public bonusService: IBonusService

    constructor() {
        this.products = products
        this.bonusService = new BonusService()
    }

    static getInstance(): Shop {
        if (!Shop.instance) this.instance = new Shop()
        return this.instance
    }

    sellProduct(product: IProduct, client: IClient) {
        product.applyDiscount()
        if (client.balance >= product.price) {
            client.balance -= product.price
            this.products = this.products.filter(el => el.id !== product.id)

            let bonus = (product.price * 3) / 100
            this.bonusService.addBonus(client, bonus)

            console.log('TRANSACTION:', {
                productId: product.id,
                productPrice: product.price,
                productName: product.name,
                productCategory: product.category,
                discount: product.discount,
                bonus,
                restClientBalance: client.balance,
            })
        }
        else if (!product) {
            console.log('Product not found')
        }
        else if (client.balance < product.price) {
            console.log(`Not enough money for ${product.name}`)
        }
    }
}