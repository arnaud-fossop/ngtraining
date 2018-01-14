import { Component } from '@angular/core';
import { MenuChoice } from './shared/menu-choice';
import { RecipesService } from './recipe-book/recipes.service';
import { ShoppingService } from './shopping/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService, ShoppingService]
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
