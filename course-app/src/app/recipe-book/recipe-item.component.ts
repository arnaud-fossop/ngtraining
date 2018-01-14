import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() itemSelected = new EventEmitter<void>();

  constructor(private recipesService:RecipesService) { }

  ngOnInit() {
  }

  onItemSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}