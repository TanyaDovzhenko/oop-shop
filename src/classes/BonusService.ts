import { IBonusService, IClient } from "../types/interfaces";

export class BonusService extends IBonusService {
    addBonus(client: IClient, bonus: number) {
        client.balance += Math.round(bonus)
    }
}