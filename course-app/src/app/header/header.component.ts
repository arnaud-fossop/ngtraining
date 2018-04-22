import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuChoice } from '../shared/menu-choice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // choice: MenuChoice;
  // @Output() choiceMade = new EventEmitter<MenuChoice>();

  constructor() { }

  ngOnInit() {
  }

  // onRecipesChosen() {
  //   this.choice = MenuChoice.RECIPES;
  //   this.choiceMade.emit(this.choice);
  // }

  // onShoppingChosen() {
  //   this.choice = MenuChoice.SHOPPING;
  //   this.choiceMade.emit(this.choice);
  // }
}
