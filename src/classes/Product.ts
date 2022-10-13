import { IProduct } from '../types/abstracts';
import { FoodCategories, HouseholdCategories } from '../types/enums';

export class Product extends IProduct {
    applyDiscount() {
        let day = new Date().getDay()
        if (day === 5) {
            this.price = this.price - ((this.price * 3) / 100)
            this.discount = 3
        }
    }
}

export class FoodProduct extends Product {

    constructor(price: number, category: FoodCategories, name: string) {
        super(price, category, name)
    }

    applyDiscount() {
        let time = new Date().getHours()
        if (time >= 8 && time <= 14 &&
            this.category == FoodCategories.BAKERY) {
            this.discount = (this.price * 15) / 100
            this.price = this.price - this.discount
        }
        else if (time >= 14 && time <= 18 &&
            this.category == FoodCategories.SWEETS) {
            this.discount = (this.price * 5) / 100
            this.price = this.price - this.discount
        }
    }
}

export class HouseholdProduct extends Product {

    constructor(price: number, category: HouseholdCategories, name: string) {
        super(price, category, name)
    }

    applyDiscount() {
        let day = new Date().getDay()
        if (day === 1 && this.category == HouseholdCategories.INTERIOR) {
            this.discount = (this.price * 8) / 100
            this.price = this.price - this.discount
        }
        else if (day === 3 && this.category == HouseholdCategories.GARDEN) {
            this.discount = (this.price * 12) / 100
            this.price = this.price - this.discount
        }
    }
}

