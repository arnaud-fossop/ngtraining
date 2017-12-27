import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numero: number = -1;
  running:boolean = false;
  timer;
  @Output() numberEmitted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    if (!this.running) {
      this.timer = setInterval(() => { this.numero++; this.numberEmitted.emit(this.numero)}, 1000);
      this.running = true;
    }
  }

  onStop() {
    if (this.running) {
      clearInterval(this.timer);
      this.running = false;
    }
  }
}
