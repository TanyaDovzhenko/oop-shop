import { v4 } from "uuid"

export abstract class IClient {
    balance: number
    abstract buy(productId: string): void

    constructor(balance: number) {
        this.balance = balance
    }
}

export abstract class IProduct {
    id: string = v4()
    price: number
    name: string
    category: string
    discount: number | null = null
    abstract applyDiscount(): void

    constructor(price: number, category: string, name: string) {
        this.price = price
        this.category = category
        this.name = name
    }
}