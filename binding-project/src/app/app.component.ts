import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emitted = [];
  lastEmitted:number = -1;

  onNumberEmitted(numero: number) {
    this.emitted.unshift(numero);
    this.lastEmitted = numero;
  }
}
