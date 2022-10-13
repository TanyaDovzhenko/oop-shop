import { FoodProduct, HouseholdProduct } from "../classes/Product";
import { FoodCategories, HouseholdCategories } from "../types/enums";
import { IProduct } from "../types/abstracts";

export const products: Array<IProduct> = [
    new FoodProduct(30, FoodCategories.SWEETS, 'Marshmallow'),
    new FoodProduct(80, FoodCategories.BAKERY, 'Cake'),
    new FoodProduct(60, FoodCategories.FRUITS, 'Mango'),
    new HouseholdProduct(70, HouseholdCategories.GARDEN, 'Pot'),
    new HouseholdProduct(20, HouseholdCategories.TOOLS, 'Scissors'),
    new HouseholdProduct(100, HouseholdCategories.INTERIOR, 'Pillow')
]
