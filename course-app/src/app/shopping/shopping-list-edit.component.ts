import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddNewIngredient() {
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}