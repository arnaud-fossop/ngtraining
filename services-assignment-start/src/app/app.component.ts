import { Component, OnInit } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeToInactiveActionsCount: number;
  inactiveToActiveActionsCount: number;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.countChanged.subscribe(()=>{
      this.activeToInactiveActionsCount = this.counterService.activeToInactiveActionsCount;
      this.inactiveToActiveActionsCount = this.counterService.inactiveToActiveActionsCount;
    });
  }
}
