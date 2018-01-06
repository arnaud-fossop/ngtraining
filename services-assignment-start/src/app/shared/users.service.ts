import { Injectable } from "@angular/core"
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService:CounterService) {}

    setToInActive(inactiveUserId:number) {
        this.inactiveUsers.push(this.activeUsers[inactiveUserId]);
        this.activeUsers.splice(inactiveUserId, 1);

        this.counterService.incrementActiveToInactiveActionsCount();
    }

    setToActive(activeUserId:number) {
        this.activeUsers.push(this.inactiveUsers[activeUserId]);
        this.inactiveUsers.splice(activeUserId, 1);

        this.counterService.incrementInactiveToActiveActionsCount();
    }
}