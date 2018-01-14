import { Injectable, EventEmitter } from "@angular/core"
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping/shopping.service";

@Injectable()
export class RecipesService {
    recipes:Recipe[] = [
        new Recipe("Very Big Mac", 
                   "Our big mac", 
                   "https://www.mcdonalds.cz/wp-content/uploads/2016/03/pro_big-mac.png",
                   [
                       new Ingredient("Beef", 1),
                       new Ingredient("Bread", 2),
                       new Ingredient("Onions", 1)
                   ]
                  ),
        new Recipe("Poutine", 
                  "Poutine from Quebec", 
                  "http://www.macleans.ca/wp-content/uploads/2017/05/MAC06_CANADA_PROJECT_RICHLER_POST01.jpg",
                  [
                      new Ingredient("Potatoes", 5),
                      new Ingredient("Cheese curds", 2),
                      new Ingredient("Beef gravy", 1)
                  ]
                 )
                   
      ];

    selectedRecipeId:number=0;
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingService:ShoppingService) {}

    selectRecipe(id:number) {
        this.selectedRecipeId = id;
        this.recipeSelected.emit(this.getSelectedRecipe());
    }

    getSelectedRecipe() {
        return this.recipes[this.selectedRecipeId];
    }

    addIngredientsToShoppingList(recipe: Recipe) {
        this.shoppingService.addIngredients(recipe.ingredients);
    }
}