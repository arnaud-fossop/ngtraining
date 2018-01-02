import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  value = 5;

  oddNumbers() {
    return this.numbers.filter(e => e % 2 !== 0);
  }

  evenNumbers() {
    return this.numbers.filter(e => e %2 == 0);
  }
}
