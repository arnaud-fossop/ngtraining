import { EventEmitter } from "@angular/core";

export class CounterService {
    activeToInactiveActionsCount: number = 0;
    inactiveToActiveActionsCount: number = 0;
    countChanged = new EventEmitter<void>();

    incrementActiveToInactiveActionsCount() {
        this.activeToInactiveActionsCount++;
        this.countChanged.emit();
    }

    incrementInactiveToActiveActionsCount() {
        this.inactiveToActiveActionsCount++;
        this.countChanged.emit();
    }
}