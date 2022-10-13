import { IBonusService, IClient } from "../types/abstracts";


export class BonusService extends IBonusService {
    addBonus(client: IClient, bonus: number) {
        client.balance += Math.round(bonus)
    }
}