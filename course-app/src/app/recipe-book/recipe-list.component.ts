import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipesService } from './recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService:RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }

  createNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}