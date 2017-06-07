import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shopListService : ShoppingListService) { }
  private recipes : Recipe[] = [

    new Recipe('Salmon dish','This is a test recipe',
      'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
      [
        new Ingredient('Salmon',1),
        new Ingredient('Spinach',12)
      ]),
    new Recipe('Pizza Pepperoni','The description of that second test recipe'
      ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxy8qVl0R1GoLIYf5qz87VMGVKPOwG-M1Z8y9DbyP6nFUIFB7HT7v6ECK',
      [
        new Ingredient('Pizza doug',1),
        new Ingredient('Pepperoni',10)
      ])];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shopListService.addRange(ingredients);
  }
}
