import { IProduct } from '../types/interfaces';
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
        this.applyDiscount()
    }

    applyDiscount() {
        let time = new Date().getHours()
        if (time >= 8 && time <= 14 &&
            this.category == FoodCategories.BAKERY) {
            this.price = this.price - ((this.price * 15) / 100)
            this.discount = 15
        }
        else if (time >= 14 && time <= 18 &&
            this.category == FoodCategories.SWEETS) {
            this.price = this.price - ((this.price * 5) / 100)
            this.discount = 5
        }
    }
}

export class HouseholdProduct extends Product {

    constructor(price: number, category: HouseholdCategories, name: string) {
        super(price, category, name)
        this.applyDiscount()
    }

    applyDiscount() {
        let day = new Date().getDay()
        if (day === 1 && this.category == HouseholdCategories.INTERIOR) {
            this.price = this.price - ((this.price * 8) / 100)
            this.discount = 8
        }
        else if (day === 3 && this.category == HouseholdCategories.GARDEN) {
            this.price = this.price - ((this.price * 12) / 100)
            this.discount = 12
        }
    }
}

