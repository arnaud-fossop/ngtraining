import { Component } from '@angular/core';
import { MenuChoice } from './shared/menu-choice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  choice: MenuChoice = MenuChoice.SHOPPING;

  onChoiceMade(choice : MenuChoice) {
    this.choice = choice;
  }

  shoppingChosen() {
    return this.choice == MenuChoice.SHOPPING;
  }

  recipesChosen() {
    return this.choice == MenuChoice.RECIPES;
  }
}
