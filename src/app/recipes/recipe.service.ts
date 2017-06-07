import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe',
      'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Second Test Recipe','The description of that second test recipe'
      ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxy8qVl0R1GoLIYf5qz87VMGVKPOwG-M1Z8y9DbyP6nFUIFB7HT7v6ECK')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
