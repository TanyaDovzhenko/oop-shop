import { products } from "../data/products"
import { IClient, IProduct } from "../types/interfaces"

export class Shop {
    private static instance: Shop
    public products: Array<IProduct>

    constructor() {
        this.products = products
    }

    static getInstance(): Shop {
        if (!Shop.instance) this.instance = new Shop()
        return this.instance
    }

    sellProduct(productId: string, client: IClient) {
        const product = this.products.find(el => el.id === productId)
        if (product && client.balance >= product.price) {
            client.balance -= product.price
            this.products = this.products.filter(el => el.id !== productId)
            console.log('TRANSACTION:', {
                productId,
                productPrice: product.price,
                productName: product.name,
                productCategory: product.category,
                discount: product.discount ? (product.discount + '%') : null,
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