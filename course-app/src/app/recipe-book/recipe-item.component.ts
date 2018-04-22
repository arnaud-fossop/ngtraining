import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeIndex:number
  @Input() recipe:Recipe;

  constructor(private recipesService:RecipesService) { }

  ngOnInit() {
  }
}