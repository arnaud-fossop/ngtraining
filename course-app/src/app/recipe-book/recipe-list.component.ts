import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Test", 
               "This is a test", 
               "http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg"
              ),
    new Recipe("Another Test", 
              "This is a another test", 
              "http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg"
             )
               
  ];

  @Output() itemSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(recipe: Recipe) {
    this.itemSelected.emit(recipe);
  }

}