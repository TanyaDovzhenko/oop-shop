import { Client } from "./classes/Client"
import { Shop } from "./classes/Shop"

const shop = Shop.getInstance()
const client = new Client(200)

function buyEverything() {
    shop.products.forEach(el => client.buy(el))
}

buyEverything()